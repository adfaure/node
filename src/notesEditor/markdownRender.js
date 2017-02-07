import React from 'react';
import Paper from 'material-ui/Paper'
import MarkdownIt from 'markdown-it';

class MarkdownRender extends React.Component {

  constructor(props) {
    super(props);

    this.md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

  }

  render() {
    let html = this.md.render(this.props.content);
    return (
      <Paper zDepth={0}>
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: html }} ></div>
        </div>
      </Paper>
    );
  }

}


MarkdownRender.propTypes = {
  content: React.PropTypes.string.isRequired
}


export default MarkdownRender
