export const createBouncyText = (text: string) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      style={{
        display: "inline-block",
        transition: "transform 0.3s ease-in-out",
        margin: letter === " " ? "0 5px" : "0", // Add margin for space characters
      }}
      onMouseEnter={(e) => {
        if (letter !== " ") {
          e.currentTarget.style.transform = "scale(1.2)";
        }
      }}
      onMouseLeave={(e) => {
        if (letter !== " ") {
          e.currentTarget.style.transform = "scale(1)";
        }
      }}
    >
      {letter}
    </span>
  ));
};
