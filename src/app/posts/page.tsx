import { CardHoverEffectDemo } from "../components/Posts/CardList";

const Posts = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold underline underline-offset-8 mt-10 decoration-green-400">
        Posts
      </h1>
      <CardHoverEffectDemo />
    </>
  );
};
export default Posts;

// const base_url = "https://jsonplaceholder.typicode.com/posts";

// const Posts = async () => {
//   const respon = await fetch(base_url);
//   const posts: Iposts[] = await respon.json();

//   interface Iposts {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }

//   return (
//     <div>
//       <h1 className="text-center text-4xl font-bold underline underline-offset-8  decoration-green-400">
//         Posts
//       </h1>
//       <CardHoverEffectDemo/>
//     </div>
//   );
// };

// export default Posts;
