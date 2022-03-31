import { getAll } from "../../data/entrieslist";

import { CardShared } from "../shared/CardShared";

export const HomeScreen = () => {
  const entries = getAll();
  return (
    <div className="list__main">
      <div className="list__grid">
        {entries.map((entry) => (
          <CardShared key={entry.id} {...entry} />
        ))}
      </div>
    </div>
  );
};
