import { h } from 'preact'

const styles = `
section {
  margin-top: 16px;
  margin-right: auto;
  background: white;
  padding: 24px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1500px;
  margin-left: auto;
}
.stars {
  color: gold;
  content: star;
}
.nowrap {
  font-size: 14px;
  margin-bottom: 16px;
  color: #444;
}
.reponame {
  text-decoration: none;
  margin-bottom: 8px;
  color: #079941;
}
.reponame:hover {
  text-decoration: underline;
}
.description {
  color: #444;
  font-size: 14px;
}
.repowrapper {
  margin: 8px;
  max-height: 400px;
  overflow: hidden;
  box-shadow: 2px 2px 4px #999;
  transition: .2s ease-in-out transform, .2s ease-in-out box-shadow;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 300px;
  height: 150px;
  max-width: 300px;
  min-width: 200px;
  text-decoration: none;
}
.repowrapper:hover, .repowrapper:focus {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15);
  transform: translate(1px, -1px)
}
`

const Star = () => <span className="stars">{' \u2605'}</span>

const Stars = ({ stars }) => (
  <span>
    {stars} <Star />
  </span>
)

const Repo = (props) => (
  <a
    className="repowrapper"
    key={props.name}
    href={props.url}
    target="blank"
    rel="noopener noreferrer"
  >
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <span className="reponame">
      {props.name}
    </span>
    <span className="nowrap">
      <Stars stars={props.stars} />
      {props.language && (
        <span>
          {' '}
          &middot; <span>{props.language}</span>
        </span>
      )}
    </span>
    <div className="description">{props.description}</div>
  </a>
)

const Repos = (props) => (
  <section>
    {props.repos.map((repo) => (
      <Repo {...repo} key={repo.name} />
    ))}
  </section>
)

export default Repos
