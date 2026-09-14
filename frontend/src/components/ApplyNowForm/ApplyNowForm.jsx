import { useState } from "react";
import { FiX, FiChevronDown, FiSend } from "react-icons/fi";

const initialFormData = {
  name: "",
  email: "",
  mobile: "",
  program: "",
  course: "",
  state: "India - Maharashtra",
  taluka: "",
  score10: "",
  score12: "",
  college: "",
  entranceScore: "",
  caste: "",
  gender: "",
  source: "",
};

const ApplyNowForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Application Data:", formData);

    alert("Application submitted successfully!");

    setFormData(initialFormData);

    onClose();
  };

  return (
    <>
      {/* overlay */}
      <div className={`fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-500 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} onClick={onClose} />

      {/* right drawer */}
      <div className={`fixed right-0 top-0 z-[9999] h-full w-full max-w-[900px] bg-white shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* header */}
        <div className="flex h-[78px] items-center justify-between bg-gradient-to-r from-[#f4510b] to-[#8f2d00] px-5 text-white sm:px-7">
          <div>
            <h2 className="text-2xl font-bold leading-tight sm:text-[26px] md:text-[28px]">
              Lead Registration
            </h2>

            <p className="mt-1 text-[13px] leading-5 text-white/80 sm:text-sm md:text-[15px]">
              Fill in your details below to get started
            </p>
          </div>

          <button type="button" onClick={onClose} aria-label="Close application form" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10">
            <FiX size={25} strokeWidth={1.8} />
          </button>
        </div>

        {/* form */}
        <div className="h-[calc(100%-78px)] overflow-y-auto bg-gray-50 px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="mx-auto w-full max-w-[807px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">
            <form onSubmit={handleSubmit} className="space-y-3">

              {/* full name */}
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" required className="form-input" />

              {/* email & mobile */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required className="form-input" />

                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile No" required className="form-input" />
              </div>

              {/* program & course */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <SelectField name="program" value={formData.program} onChange={handleChange} placeholder="Select Program" options={["B.Tech", "BCA", "BBA", "MBA", "MCA", "B.Com"]} />

                <SelectField name="course" value={formData.course} onChange={handleChange} placeholder="Select Course" options={["Computer Science Engineering", "Mechanical Engineering", "Civil Engineering", "Electronics Engineering", "Information Technology"]} />
              </div>

              {/* state & taluka */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <SelectField name="state" value={formData.state} onChange={handleChange} label="State" options={["India - Maharashtra", "India - Punjab", "India - Haryana", "India - Delhi", "India - Uttar Pradesh"]} />

                <SelectField name="taluka" value={formData.taluka} onChange={handleChange} placeholder="Select Taluka" options={["Mullana", "Ambala", "Chandigarh", "Other"]} />
              </div>

              {/* 10th & 12th score*/}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <input type="text" name="score10" value={formData.score10} onChange={handleChange} placeholder="Enter 10th Score" className="form-input" />

                <input type="text" name="score12" value={formData.score12} onChange={handleChange} placeholder="Enter 12th Score" className="form-input" />
              </div>

              {/* college & entrance score */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <input type="text" name="college" value={formData.college} onChange={handleChange} placeholder="Enter Last College/School Name" className="form-input" />

                <input type="text" name="entranceScore" value={formData.entranceScore} onChange={handleChange} placeholder="Enter Entrance Exam Score" className="form-input" />
              </div>

              {/* caste & gender */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <SelectField name="caste" value={formData.caste} onChange={handleChange} placeholder="Select Caste Category" options={["General", "OBC", "SC", "ST", "Other"]} />

                <SelectField name="gender" value={formData.gender} onChange={handleChange} placeholder="Select Gender" options={["Male", "Female", "Other"]} />
              </div>

              {/* source */}
              <SelectField name="source" value={formData.source} onChange={handleChange} placeholder="Enter How do you know about Sanjivani ?" options={["Google", "Instagram", "Facebook", "YouTube", "Friend / Relative", "Newspaper", "College Website", "Other"]} />

              {/* submit */}
              <button type="submit" className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#f4510b] px-6 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#df4607] hover:shadow-md sm:px-7 sm:py-3 sm:text-[15px]">
                <FiSend size={15} />
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* form styles */}
      <style>{`
        .form-input {
          width: 100%;
          height: 48px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          padding: 0 14px;
          font-size: 15px;
          color: #334155;
          outline: none;
          transition: all 0.2s ease;
          background: white;
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        .form-input:focus {
          border-color: #f4510b;
          box-shadow: 0 0 0 3px rgba(244, 81, 11, 0.08);
        }

        @media (max-width: 640px) {
          .form-input {
            height: 46px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};


// select component
function SelectField({
  name,
  value,
  onChange,
  placeholder,
  label,
  options,
}) {
  return (
    <div className="relative">

      {/* label */}
      {label && (
        <span className="absolute left-3 top-[-7px] z-10 bg-white px-1 text-[12px] font-medium text-slate-500">
          {label}
        </span>
      )}

      <select name={name} value={value} onChange={onChange} required={!label} className={`h-[48px] w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 pr-10 text-[15px] outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 ${value ? "text-slate-600" : "text-slate-400"}`}>
        {!label && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* dropdown icon */}
      <FiChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
    </div>
  );
}

export default ApplyNowForm;