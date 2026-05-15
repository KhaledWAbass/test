export function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
      className="not-found"
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#333",
          marginBottom: "1rem",
        }}
      >
        404 - Page Not Found
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
        }}
      >
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
