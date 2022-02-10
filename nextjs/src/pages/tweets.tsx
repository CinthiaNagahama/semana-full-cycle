import { NextPage } from "next";
import useSWR from "swr";
import http from "../utils/https";
import { Tweet as TweetModel } from "../utils/models";
import { Title } from "../components/Title";
import { Tweet } from "../components/Tweet";


const fetcher = (url:string) => 
  http.get(url).then((res) => res.data
);

const TweetsPage: NextPage = () => {
  const {data: tweets} = useSWR<TweetModel[]>('tweets', fetcher, {refreshInterval: 5000});

  return (
    <div>
      <Title title="Tweets"/>
      {tweets?.map((tweet, key) => (
        <Tweet key={key} tweet={tweet}/>
      ))}
    </div>
  );
}

export default TweetsPage;