export const Contact = () => {
  const HandleSubmit = (formdata) => {
    console.log(formdata.entries());
    const inputData = Object.fromEntries(formdata.entries());
    console.log(inputData);
  };

  return (
    <>
      <section className="px-10 md:px-40 pb-20">
        {/* Heading */}
        <div>
          <h2 className="text-2xl text-center py-10 font-serif">Contact Us</h2>
        </div>
        {/* Form Div */}
        <div className="flex justify-center">
          <form
            action={HandleSubmit}
            className="flex flex-col gap-3.5 w-full max-w-md"
          >
            <input
              className="border p-2"
              type="text"
              required
              autoComplete="false"
              placeholder="Enter Your Name"
              name="username"
            />

            <input
              className="border p-2"
              type="email"
              required
              autoComplete="false"
              placeholder="Enter Your Email"
              name="email"
            />

            <textarea
              className="border p-2"
              name="message"
              id=""
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter Your Messaage"
            ></textarea>

            <button
              className="border p-2 cursor-pointer text-start rounded-2xl font-semibold"
              type="submit"
              value="send"
            >
              Send Message!!!
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
