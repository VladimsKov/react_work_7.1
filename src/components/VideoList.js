import Video from "./Video";

function VideoList(props) {
  return props.list.map((item, i) => <Video key={i} url={item.url} date={item.date} />);
}

export default VideoList