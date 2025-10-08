import { useState, useEffect } from "react";
import StepOne from "./Steps/StepOne/StepOne";
import StepTwo from "./Steps/StepTwo/StepTwo";
import StepThree from "./Steps/StepThree/StepThree";
import styles from "./CompleteProfile.module.css";
import sideImg from "../../assets/images/complete-profile.jpg";

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

  const stepLabels = ["Personal Information", "Daily Routine", "Goals"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftPane}>
        <img src={sideImg} alt="Profile side" className={styles.sideImage} />
      </div>

      <div className={styles.rightPane}>
        {/* === Progress Header === */}
        <div className={styles.progressBar}>
          {stepLabels.map((label, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber <= steps;
            return (
              <div key={index} className={styles.stepItem}>
                <div
                  className={`${styles.circle} ${isActive ? styles.active : ""}`}
                >
                  {stepNumber}
                </div>
                {index < stepLabels.length - 1 && (
                  <div
                    className={`${styles.line} ${
                      stepNumber < steps ? styles.lineActive : ""
                    }`}
                  ></div>
                )}
                <p
                  className={`${styles.stepLabel} ${
                    isActive ? styles.labelActive : ""
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        {/* === Active Step Form === */}
        <div className={styles.formSection}>{showActiveComponent()}</div>
      </div>
    </div>
  );
}