import Videos from "@/components/HomePage/allVideos/videos";

const Home = (props: any) => {
  const paramsData = props?.searchParams || "";
  return (
    <main>
      <div className=" container mx-auto px-5 flex flex-col justify-center items-center">
        <Videos params={paramsData} />
      </div>
    </main>
  );
};

export default Home;
