export default function MailingList() {
  return (
    <div className="bg-light-blackasset w-full flex flex-col gap-[3rem] text-center text-light-alabaster rounded-xl p-[3rem]">
      <span className="flex flex-col">
        <h2 className="text-[38px] font-Novela">Discover beauty with us!</h2>
        <p>Sign up for the newsletter and join our community today.</p>
      </span>

      <form className="flex flex-col gap-y-1">
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border border-light-alabaster px-[1rem] py-[0.5rem]  rounded-lg min-h-[3rem] w-auto h-auto align-middle"
        />
        <button className="bg-light-alabaster text-light-blackasset rounded-lg  py-[0.875rem] px-[1.5rem] justify-center whitespace-nowrap">
          Sign up
        </button>
      </form>
    </div>
  );
}
