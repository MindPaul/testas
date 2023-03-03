
function Joke({joke}) {
  return <div style={{color:'#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0'), }}>{joke}</div>;
}
export default Joke;