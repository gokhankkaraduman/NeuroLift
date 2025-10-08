import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "./Steps/StepOne/StepOne";
import StepTwo from "./Steps/StepTwo/StepTwo";
import StepThree from "./Steps/StepThree/StepThree";
import styles from "./CompleteProfile.module.css";
import sideImg1 from "../../assets/images/complete-profile-stepone.jpg";
import sideImg2 from "../../assets/images/complete-profile-steptwo.jpg";
import sideImg3 from "../../assets/images/complete-profile-stepthree.jpg";



export default function CompleteProfile() {
  const [steps, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // ✅ FormData'yı güncellerken mevcut veriyi koru
  const updateFormData = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData
    }));
  };

  // ✅ Step'e göre side image'ı döndür
  const getCurrentSideImage = () => {
    switch (steps) {
      case 1:
        return sideImg1;
      case 2:
        return sideImg2;
      case 3:
        return sideImg3;
      default:
        return sideImg1;
    }
  };

  
useEffect(() => {
  console.log('Updated formData:', formData);
}, [formData]);

  const showActiveComponent = () => {
    switch (steps) {
      case 1:
        return <StepOne nextStep={nextStep} formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <StepTwo nextStep={nextStep} prevStep={prevStep} formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <StepThree prevStep={prevStep} formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  // ✅ Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.4
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.1 }
  };

  const imageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.6
  };

  const stepLabels = ["Personal Information", "Daily Routine", "Goals"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPane}>
        <AnimatePresence mode="wait">
          <motion.img
            key={steps}
            src={getCurrentSideImage()}
            alt={`Profile step ${steps}`}
            className={styles.sideImage}
            variants={imageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={imageTransition}
          />
        </AnimatePresence>
      </div>

      <div className={styles.rightPane}>
        {/* === Progress Header === */}
        <motion.div 
          className={styles.progressBar}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stepLabels.map((label, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber <= steps;
            return (
              <motion.div 
                key={index} 
                className={styles.stepItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  className={`${styles.circle} ${isActive ? styles.active : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stepNumber}
                </motion.div>
                {index < stepLabels.length - 1 && (
                  <motion.div
                    className={`${styles.line} ${
                      stepNumber < steps ? styles.lineActive : ""
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: stepNumber < steps ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  ></motion.div>
                )}
                <motion.p
                  className={`${styles.stepLabel} ${
                    isActive ? styles.labelActive : ""
                  }`}
                  animate={{ 
                    color: isActive ? "var(--primary-color)" : "var(--text-secondary)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {label}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* === Active Step Form === */}
        <div className={styles.formSection}>
          <AnimatePresence mode="wait">
            <motion.div
              key={steps}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
              style={{ width: '100%', height: '100%' }}
            >
              {showActiveComponent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}