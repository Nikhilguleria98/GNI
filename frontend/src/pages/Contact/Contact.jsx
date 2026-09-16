import { useState } from "react";
import { FiClock, FiMapPin, FiMail, FiPhone, FiSend, FiCheckCircle, FiUser, FiBookOpen, FiArrowRight } from "react-icons/fi";

const fields = {
    name: { label: "Full Name", icon: FiUser, placeholder: "Your name", required: true },
    email: { label: "Email Address", icon: FiMail, placeholder: "Your email", required: true },
    phone: { label: "Phone Number", icon: FiPhone, placeholder: "Your phone number (optional)" },
    subject: { label: "Subject", icon: FiBookOpen, placeholder: "Please enter your subject", required: true },
};

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", subject: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [activeField, setActiveField] = useState("");

    const handleChange = (e) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setActiveField("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

        setTimeout(() => {
            setSubmitted(false);
            setActiveField("");
        }, 3000);
    };

    const active = (name) => activeField === name;

    const Field = ({ name }) => {
        const f = fields[name];
        const Icon = f.icon;

        return (
            <div>
                <label htmlFor={name} className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                    {f.label} {f.required && <span className="text-red-500">*</span>}
                </label>

                <div className="relative">
                    <Icon size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${active(name) ? "text-orange-500" : "text-gray-400"}`} />

                    <input id={name} name={name} type={name === "email" ? "email" : name === "phone" ? "tel" : "text"} value={formData[name]} onChange={handleChange} onFocus={() => setActiveField(name)} onBlur={() => setActiveField("")} placeholder={f.placeholder} required={f.required} className="h-10 w-full rounded-md border border-gray-200 pl-9 pr-3 text-[12px] outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:h-11 sm:text-[13px] md:text-[14px]" />
                </div>
            </div>
        );
    };

    const status = activeField === "success" ? "Message successfully connected" : activeField === "name" ? "Student profile initiated" : activeField === "email" ? "Email connection active" : activeField === "phone" ? "Phone connection active" : activeField === "subject" ? "Inquiry channel activated" : activeField === "message" ? "Message ready to send" : "Your connection starts here";

    return (
        <section className="gni-contact-section gni-contact-3d bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-6xl">

                <div className="grid overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm lg:grid-cols-2">

                    {/* left */}
                    <div className="border-b border-gray-200 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
                        <div className="group w-fit">
                            <h2 className="text-[24px] font-bold leading-tight text-gray-900 sm:text-[30px] md:text-[34px] lg:text-[36px]">
                                Contact Us
                            </h2>
                            <div className="mt-2 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
                        </div>

                        {/* network */}
                        <div className="gni-contact-network relative mt-7 mb-8 h-[300px] overflow-hidden rounded-2xl border border-orange-100 bg-[#fffaf5]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.10),transparent_50%)]" />

                            <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.08) 1px,transparent 1px)", backgroundSize: "26px 26px" }} />

                            <div className="gni-network-stage">
                                {[
                                    ["top", "down"],
                                    ["bottom", "up"],
                                    ["left", "right"],
                                    ["right", "left"],
                                ].map(([side, direction]) => (
                                    <div key={side} className={`gni-connection gni-connection-${side}`}>
                                        <span className={`gni-moving-dot gni-dot-${direction}`} />
                                    </div>
                                ))}

                                <div className="gni-soft-ring gni-soft-ring-one" />
                                <div className="gni-soft-ring gni-soft-ring-two" />

                                <div className="gni-network-center">
                                    <div className={`gni-center-wave ${activeField ? "gni-center-wave-active" : ""}`} />

                                    <div className={`gni-center-circle ${activeField === "success" ? "gni-center-success" : ""}`}>
                                        {activeField === "success" ? (
                                            <FiCheckCircle size={28} className="gni-success-icon" />
                                        ) : (
                                            <div className="text-center">
                                                <div className="text-[17px] font-bold leading-none">GNI</div>
                                                <div className="mt-1 text-[6px] font-semibold tracking-[2px] text-white/80">
                                                    CONNECT
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Node position="top" icon={<FiBookOpen size={18} />} text="Inquiry" active={active("subject") || active("message")} />

                                <Node position="left" icon={<FiUser size={18} />} text="Student" active={active("name")} />

                                <Node position="right" icon={active("phone") ? <FiPhone size={18} /> : <FiMail size={18} />} text="Connect" active={active("email") || active("phone")} />

                                <Node position="bottom" icon={<FiSend size={18} />} text="Send" success={activeField === "success"} />
                            </div>

                            <div className="gni-network-status">
                                <div className="gni-status-inner">
                                    <div className="flex min-w-0 flex-1 items-center gap-2">
                                        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${activeField === "success" ? "bg-green-500" : activeField ? "animate-pulse bg-orange-500" : "bg-orange-300"}`} />
                                        <span className="truncate text-[9px] font-medium text-gray-500 sm:text-[10px]">
                                            {status}
                                        </span>
                                    </div>
                                    <FiArrowRight size={13} className="ml-2 text-orange-400" />
                                </div>
                            </div>
                        </div>

                        <Info icon={<FiMapPin size={18} />} title="Guru Nanak Institutions">
                            Hema Majra Road, Mullana (Ambala)
                        </Info>

                        <div className="mt-6 overflow-hidden rounded-md border border-gray-200 hover:shadow-md">
                            <iframe title="Jindal's Guru Nanak Institutions Location" src="https://www.google.com/maps?q=Jindal%27s%20Guru%20Nanak%20Institutions%2C%20Mullana%2C%20Ambala%2C%20Haryana&output=embed" className="h-[230px] w-full border-0 sm:h-[270px] lg:h-[285px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>

                        <Info icon={<FiClock size={18} />} title="Office Hours">
                            Monday to Saturday: 9:00 AM - 5:00 PM IST
                        </Info>
                    </div>

                    {/* right */}
                    <div className="p-5 sm:p-7 lg:p-8">
                        <div className="group w-fit">
                            <h2 className="text-[24px] font-bold leading-tight text-gray-900 sm:text-[30px] md:text-[34px] lg:text-[36px]">
                                Send Us a Message
                            </h2>
                            <div className="mt-2 h-[3px] w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
                        </div>

                        {submitted && (
                            <div className="mt-5 flex animate-[successReveal_0.5s_ease-out] gap-3 rounded-md border border-green-200 bg-green-50 p-3">
                                <FiCheckCircle size={19} className="mt-0.5 text-green-600" />
                                <div>
                                    <p className="text-[13px] font-semibold text-green-700 sm:text-[14px] md:text-[15px]">
                                        Message sent successfully!
                                    </p>
                                    <p className="mt-1 text-[12px] text-green-600 sm:text-[13px] md:text-[14px]">
                                        Thank you for contacting us. We will get back to you shortly.
                                    </p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field name="name" />
                                <Field name="email" />
                            </div>

                            <Field name="phone" />
                            <Field name="subject" />

                            <div>
                                <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold text-gray-700 sm:text-[13px] md:text-[14px]">
                                    Message <span className="text-red-500">*</span>
                                </label>

                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setActiveField("message")} onBlur={() => setActiveField("")} placeholder="Tell us about your inquiry - B.Tech programs, engineering colleges, admissions, etc." required minLength={10} maxLength={500} rows={5} className="w-full resize-none rounded-md border border-gray-200 px-3 py-2.5 text-[12px] leading-5 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:text-[13px] sm:leading-6 md:text-[14px]" />

                                <p className="mt-1 text-right text-[10px] text-gray-400 sm:text-[11px] md:text-[12px]">
                                    {formData.message.length}/500 characters
                                </p>
                            </div>

                            <button type="submit" className="group inline-flex items-center gap-2 rounded-md bg-orange-600 px-6 py-3 text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 sm:px-7 sm:py-3.5 sm:text-[13px] md:text-[14px]">
                                <FiSend size={16} className="transition-transform group-hover:translate-x-1" />
                                Send Message
                                <FiArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        .gni-contact-3d {
          transition: transform .4s ease, box-shadow .4s ease;
          transform-style: preserve-3d;
        }
        .gni-contact-3d:hover {
          transform: perspective(1200px) rotateX(1deg) rotateY(-1deg) translateY(-5px);
          box-shadow: 0 25px 50px rgba(0,0,0,.12);
        }

        .gni-network-stage {
          position:absolute;
          inset:12px 18px 52px;
        }

        .gni-network-center {
          position:absolute;
          left:50%;
          top:50%;
          width:76px;
          height:76px;
          transform:translate(-50%,-50%);
          z-index:30;
        }

        .gni-center-circle {
          position:absolute;
          inset:4px;
          display:flex;
          align-items:center;
          justify-content:center;
          border:3px solid white;
          border-radius:50%;
          background:#f97316;
          color:white;
          box-shadow:0 8px 24px rgba(249,115,22,.25);
          transition:.35s;
        }

        .gni-center-success {
          background:#22c55e;
          box-shadow:0 8px 24px rgba(34,197,94,.25);
        }

        .gni-center-wave {
          position:absolute;
          inset:0;
          border:1px solid rgba(249,115,22,.25);
          border-radius:50%;
          animation:gniWave 2.8s ease-out infinite;
        }

        .gni-center-wave-active { animation-duration:1.4s; }

        .gni-soft-ring {
          position:absolute;
          left:50%;
          top:50%;
          border:1px solid rgba(249,115,22,.09);
          border-radius:50%;
          transform:translate(-50%,-50%);
        }

        .gni-soft-ring-one {
          width:120px;
          height:120px;
          animation:gniRing 3.5s ease-in-out infinite;
        }

        .gni-soft-ring-two {
          width:175px;
          height:175px;
          animation:gniRing 3.5s ease-in-out 1.2s infinite;
        }

        .gni-connection {
          position:absolute;
          z-index:10;
          background:rgba(249,115,22,.18);
          overflow:hidden;
        }

        .gni-connection-top,
        .gni-connection-bottom {
          left:50%;
          width:1px;
          height:calc(50% - 42px);
          transform:translateX(-50%);
        }

        .gni-connection-top { top:42px; }
        .gni-connection-bottom { top:50%; }

        .gni-connection-left,
        .gni-connection-right {
          top:50%;
          width:calc(50% - 42px);
          height:1px;
          transform:translateY(-50%);
        }

        .gni-connection-left { left:42px; }
        .gni-connection-right { left:50%; }

        .gni-moving-dot {
          position:absolute;
          width:5px;
          height:5px;
          border-radius:50%;
          background:#f97316;
          box-shadow:0 0 8px rgba(249,115,22,.7);
        }

        .gni-dot-down {
          left:-2px;
          top:-6px;
          animation:gniDown 2s linear infinite;
        }
        .gni-dot-up {
          left:-2px;
          bottom:-6px;
          animation:gniUp 2s linear infinite;
        }
        .gni-dot-right {
          left:-6px;
          top:-2px;
          animation:gniRight 2s linear infinite;
        }
        .gni-dot-left {
          right:-6px;
          top:-2px;
          animation:gniLeft 2s linear infinite;
        }

        .gni-network-node {
          position:absolute;
          width:64px;
          z-index:40;
          text-align:center;
          color:#94a3b8;
        }

        .gni-network-node span {
          display:block;
          margin-top:5px;
          font-size:8px;
          font-weight:700;
          letter-spacing:.06em;
          text-transform:uppercase;
        }

        .gni-node-circle {
          width:44px;
          height:44px;
          margin:auto;
          display:flex;
          align-items:center;
          justify-content:center;
          border:1px solid #e5e7eb;
          border-radius:50%;
          background:white;
          color:#94a3b8;
          box-shadow:0 5px 15px rgba(0,0,0,.07);
          transition:.3s;
        }

        .gni-node-top {
          left:50%;
          top:0;
          transform:translateX(-50%);
        }
        .gni-node-left {
          left:0;
          top:50%;
          transform:translateY(-50%);
        }
        .gni-node-right {
          right:0;
          top:50%;
          transform:translateY(-50%);
        }
        .gni-node-bottom {
          left:50%;
          bottom:0;
          transform:translateX(-50%);
        }

        .gni-node-active { color:#ea580c; }
        .gni-node-active .gni-node-circle {
          background:#f97316;
          color:white;
          border-color:#f97316;
          box-shadow:0 7px 20px rgba(249,115,22,.25);
        }

        .gni-node-success { color:#16a34a; }
        .gni-node-success .gni-node-circle {
          background:#22c55e;
          color:white;
          border-color:#22c55e;
        }

        .gni-network-status {
          position:absolute;
          left:12px;
          right:12px;
          bottom:10px;
          z-index:100;
        }

        .gni-status-inner {
          min-height:28px;
          display:flex;
          align-items:center;
          box-sizing:border-box;
          border:1px solid #ffedd5;
          border-radius:9999px;
          background:rgba(255,255,255,.97);
          padding:6px 10px;
          box-shadow:0 2px 8px rgba(0,0,0,.05);
        }

        @keyframes gniWave {
          0% { opacity:.7; transform:scale(.75); }
          70%,100% { opacity:0; transform:scale(1.35); }
        }

        @keyframes gniRing {
          0%,100% { opacity:.25; transform:translate(-50%,-50%) scale(.96); }
          50% { opacity:.65; transform:translate(-50%,-50%) scale(1); }
        }

        @keyframes gniDown {
          0% { top:-6px; opacity:0; }
          15%,85% { opacity:1; }
          100% { top:100%; opacity:0; }
        }

        @keyframes gniUp {
          0% { bottom:-6px; opacity:0; }
          15%,85% { opacity:1; }
          100% { bottom:100%; opacity:0; }
        }

        @keyframes gniRight {
          0% { left:-6px; opacity:0; }
          15%,85% { opacity:1; }
          100% { left:100%; opacity:0; }
        }

        @keyframes gniLeft {
          0% { right:-6px; opacity:0; }
          15%,85% { opacity:1; }
          100% { right:100%; opacity:0; }
        }

        @keyframes successReveal {
          from { opacity:0; transform:translateY(-8px); }
          to { opacity:1; transform:translateY(0); }
        }

        .gni-success-icon {
          animation:gniSuccess .55s ease-out;
        }

        @keyframes gniSuccess {
          0% { opacity:0; transform:scale(.5); }
          70% { opacity:1; transform:scale(1.15); }
          100% { opacity:1; transform:scale(1); }
        }

        @media(max-width:640px) {
          .gni-contact-network { height:285px; }
          .gni-network-stage { inset:10px 12px 48px; }
          .gni-network-node { width:58px; }
          .gni-node-circle { width:40px; height:40px; }
          .gni-network-center { width:70px; height:70px; }
          .gni-center-circle { width:62px; height:62px; }
          .gni-soft-ring-one { width:105px; height:105px; }
          .gni-soft-ring-two { width:155px; height:155px; }
          .gni-connection-top { top:38px; height:calc(50% - 38px); }
          .gni-connection-bottom { height:calc(50% - 38px); }
          .gni-connection-left { left:38px; width:calc(50% - 38px); }
          .gni-connection-right { width:calc(50% - 38px); }
          .gni-network-status { left:10px; right:10px; bottom:9px; }
          .gni-status-inner { min-height:26px; }
        }

        @media(prefers-reduced-motion:reduce) {
          .gni-center-wave,
          .gni-soft-ring,
          .gni-moving-dot,
          .gni-success-icon,
          .gni-contact-3d {
            animation:none !important;
            transition:none !important;
          }
          .gni-contact-3d:hover {
            transform:none !important;
          }
        }
      `}</style>
        </section>
    );
}

function Node({ position, icon, text, active, success }) {
    return (
        <div className={`gni-network-node gni-node-${position} ${active ? "gni-node-active" : success ? "gni-node-success" : ""}`}>
            <div className="gni-node-circle">{icon}</div>
            <span>{text}</span>
        </div>
    );
}

function Info({ icon, title, children }) {
    return (
        <div className="mt-5 flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600 sm:h-10 sm:w-10">
                {icon}
            </div>
            <div>
                <p className="text-[14px] font-semibold leading-tight text-gray-900 sm:text-[15px] md:text-[16px]">
                    {title}
                </p>
                <p className="mt-1 text-[12px] leading-5 text-gray-500 sm:text-[13px] sm:leading-6 md:text-[14px]">
                    {children}
                </p>
            </div>
        </div>
    );
}