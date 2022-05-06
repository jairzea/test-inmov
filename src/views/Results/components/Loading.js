const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-red border-solid rounded-full animate-spin"
      />
      <p className="mt-3">Esperando que añada un clasico...</p>
    </div>
  );
};

export default Loading;
