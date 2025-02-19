// components/LatestActivity.tsx
import LatestActivityItem from "./LatestActivityItem";

export default async function LatestActivity() {
  return (
    <div className={"bg-teal text-navy rounded-xl mx-4"}>
      <h2 className={"text-center font-bold text-lg mx-5 my-3 pt-3"}>
        Latest Activities
      </h2>
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
      <LatestActivityItem />
    </div>
  );
}
