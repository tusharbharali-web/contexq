'use client';

export default function BackToPieButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('reset3dScene'));
  };

  return (
    <>
      <button
        className="back-to-pie"
        onClick={handleClick}
        style={{
          position: "fixed",
          top: 100,
          left: 32,
          zIndex: 9999,
          display: "none",
          alignItems: "center",
          gap: 10,
          padding: "12px 22px 12px 16px",
          borderRadius: 999,
          background: "linear-gradient(90deg, #2ec4e6 0%, #4aa8f0 100%)",
          border: "none",
          color: "#0a1222",
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(46,196,230,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a1222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back to pie
      </button>
      <style>{`
        body.popup-active .back-to-pie {
          display: inline-flex !important;
          animation: backBtnFadeIn 0.5s ease 1s both;
        }
        @keyframes backBtnFadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .back-to-pie:hover {
          transform: translateX(-3px);
          box-shadow: 0 10px 30px rgba(46,196,230,0.6), 0 0 0 1px rgba(255,255,255,0.2) !important;
        }
        .back-to-pie { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      `}</style>
    </>
  );
}
