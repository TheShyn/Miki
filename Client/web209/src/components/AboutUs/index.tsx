import { Link } from "react-router-dom";

type About = {
    title: string,
    arr: string[],
    className: string
}
export default function AboutUs({ title, arr, className }:About) {
  return (
    <div>
      <h3 className={`${className}  `}>{title}</h3>
      <ul className="grid gap-[21px]">
        {arr.map((item:any) => {
          return (
            <li key={item}>
              <Link to="/">
                <a className="hover:text-3rd-text duration-500">{item}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}