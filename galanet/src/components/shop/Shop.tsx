import { articles } from "../../data/article";
import { LikeButton } from "../ui/LikeButton";
export const Shop = () => {
  return (
    <>
      <div className="grid gap-5">
        <p className="text-white text-2xl font-bold">
          En ce moment sur Galanet
        </p>
        <div className="flex flex-wrap justify-between gap-10">
          {articles.map((article, index) =>
            index <= 9 ? (
              <div className="grid rounded-lg gap-4 p-3 bg-slate-800 w-64 h-max-content text-white">
                <img className="object-cover h-54" src="./products/vaisseauStarWars.png" alt="" />
                <div className="flex justify-between">
                <div className="grid gap-2.5 py-2">
                  <p key={index} className="text-sm text-slate-50">{article.name}</p>
                  <p key={index}>{article.price}</p>
                  <p key={index} className="text-[10px]">{article.published}</p>
                </div>
                <div className="grid items-end">
                <LikeButton />
                </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
