const Jos = () => {
  return (
    <div
      style={{
        position: "absolute",
        bot: "0px",
        // left: "-1px",
        width: "auto",
        height: "88px",
        textAlign: "left",
        fontSize: "12px",
        color: "#9ca3af",
        fontFamily: "Inter",
      }}
      id="frame-scris"
    >
      <div
        style={{
          position: "fixed",
          bot: "10px",
          left: "0px",
          right: "0px",
          backgroundColor: "#04162f",
          width: "100%",
          height: "250px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "103px",
            backgroundColor: "#eee",
            width: "916px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "4px",
          }}
        >
          <div
            style={{
              borderRadius: "8px",
              border: "1px solid #e7e7e7",
              boxSizing: "border-box",
              width: "800px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding: "12px 16px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "20px",
                  height: "20px",
                  flexShrink: "0",
                  display: "none",
                }}
                alt=""
                src="/attatchment01.svg"
              />
              <textarea
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  flex: "1",
                  position: "relative",
                  color: "#1d1d1d",
                  textAlign: "left",
                }}
                placeholder="Write a message..."
              />
              <img
                style={{
                  position: "relative",
                  width: "20px",
                  height: "20px",
                  flexShrink: "0",
                  display: "none",
                }}
                alt=""
                src="/microphone01.svg"
              />
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "0",
                  backgroundColor: "transparent",
                  position: "relative",
                  width: "20px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    height: "66.67%",
                    width: "83.33%",
                    top: "16.28%",
                    right: "8.27%",
                    bottom: "17.06%",
                    left: "8.4%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                  }}
                  alt=""
                  src="/vector.svg"
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Jos;
