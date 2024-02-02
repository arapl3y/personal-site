import { Award } from "@/types/award";
import { Project } from "@/types/project";

const TableList = ({ items }: { items: Project[] | Award[] }) => {
  return (
    <div className="divide-off-black dark:divide-off-white border-off-black dark:border-off-white grid grid-cols-1 divide-y border-b border-t">
      {items.map((item) => (
        <div
          className="flex items-start justify-between gap-8 py-4 md:items-center"
          key={item._id}
        >
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-sm underline  sm:w-1/4"
            >
              {item.name}
            </a>
          ) : (
            <span className="w-full text-sm sm:w-1/4">{item.name}</span>
          )}

          <span className="hidden flex-1 text-xs sm:block">
            {item.description}
          </span>
          <span className="text-sm">{item.year}</span>
        </div>
      ))}
    </div>
  );
};

export default TableList;
