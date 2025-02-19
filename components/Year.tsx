// components/Year.tsx

export default async function Year() {
  return (
    <form className={"flex m-3 justify-between"}>
      <div className={"flex flex-col"}>
        <label htmlFor="minYear" className={"mb-2"}>
          Min Year
        </label>
        <input
          type="number"
          name="minYear"
          id="minYear"
          defaultValue="1990"
          step="1"
          className={
            "bg-light-navy outline outline-1 outline-teal rounded-3xl p-2"
          }
        />
      </div>
      <div className={"flex flex-col"}>
        <label htmlFor="maxYear" className={"mb-2"}>
          Max Year
        </label>
        <input
          type="number"
          name="maxYear"
          id="maxYear"
          defaultValue="2025"
          step="1"
          className={
            "bg-light-navy outline outline-1 outline-teal rounded-3xl p-2"
          }
        />
      </div>
    </form>
  );
}
