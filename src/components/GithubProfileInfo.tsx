import './GithubProfileInfo.css';

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

export default function GithubProfileInfo({
  name,
  thumbnail,
  bio,
  blog,
}: GithubProfileInfoProps) {
  return (
    <div className="GithubProfileInfo">
      <div className="ProfileHead">
        <img src={thumbnail} alt="user thumbnail" />
        <div>{name}</div>
      </div>
      <p>{bio}</p>
      <div>{blog !== '' && <a href={blog}>blog</a>}</div>
    </div>
  );
}
