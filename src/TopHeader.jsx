import MainPropic from "./MainPropic";

export default function TopHeader() {
  return (
    <header>
      <div className="header-left">
        <img src="src/assets/title-header.svg" alt="Cohort Manager" />
      </div>
      <MainPropic />
    </header>
  );
}
