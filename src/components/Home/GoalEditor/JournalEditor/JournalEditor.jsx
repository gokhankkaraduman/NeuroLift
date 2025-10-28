import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styles from './JournalEditor.module.css';
import { AiFillSave } from "react-icons/ai";
import { FaCheck } from "react-icons/fa"; 

export default function JournalEditor({ initialContent = "", onSave }) {
    const editorContainerRef = useRef(null); 
    const quillInstanceRef = useRef(null);
    
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (!editorContainerRef.current || quillInstanceRef.current) return;

        const quill = new Quill(editorContainerRef.current, {
            theme: "snow",
            placeholder: "Write your daily goals here...",
            modules: {
                toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["link", "image"],
                    ["clean"]
                ],
            },
        });

        quill.root.innerHTML = initialContent;
        quill.on("text-change", () => {
            
            if (isSaved) setIsSaved(false); 
            if (onSave) onSave(quill.root.innerHTML);
        });

        quillInstanceRef.current = quill;
    }, [initialContent, onSave, isSaved]); 

    const handleSave = () => {
        if (quillInstanceRef.current && onSave && !isSaving) {
            setIsSaving(true);
            onSave(quillInstanceRef.current.root.innerHTML);
            
            
            setTimeout(() => {
                setIsSaving(false);
                setIsSaved(true);
                
                setTimeout(() => setIsSaved(false), 3000); 
            }, 1000);
        }
    };

    const renderButtonContent = () => {
        if (isSaving) {
        
            return (
                <>
                    <div className={styles.spinner}></div> Saving...
                </>
            );
        }
        if (isSaved) {
            return (
                <>
                    <FaCheck /> Saved!
                </>
            );
        }
        return (
            <>
                <AiFillSave /> Save
            </>
        );
    };

    return (
        <div className={styles.journalEditor}>
            <div ref={editorContainerRef} /> 
            <div className={styles.saveButtonContainer}>
                <button 
                    className={`${styles.saveButton} ${isSaved ? styles.saveButtonSuccess : ''}`} 
                    onClick={handleSave}
                    disabled={isSaving} // Kaydedilirken butonu devre dışı bırak
                >
                    {renderButtonContent()}
                </button>
            </div>
        </div>
    );
}