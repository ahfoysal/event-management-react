const Button = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen w-full  bg-center bg-no-repeat">
      <div className="inline-flex absolute left-[170px] top-[160px] h-10 animate-[levitate_5s_ease_infinite]">
        <Button variant="bordered" color="danger">
          {" "}
          hi{" "}
        </Button>
      </div>
    </div>
  );
};

export default Button;
