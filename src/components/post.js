import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

const Container = styled.div`
  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }

  ${media.phone`
    margin: 0.5rem 0;
    padding: 0.4rem 0;
  `}
`;

const Title = styled.h4`
  margin-bottom: 0.2rem;
  color: #457b9d;
  font-size: 2.2rem;
`;

const Post = ({ node }) => (
  <Container>
    <StyledLink to={node.fields.slug}>
      <Title>{node.frontmatter.title}</Title>
    </StyledLink>
    
    <sub>
      <span>on {node.frontmatter.date}</span>
      <span>&nbsp; - &nbsp;</span>
      <span>{node.fields.readingTime.text}</span>
    </sub>
    <p style={{"line-height": "2.5rem"}} dangerouslySetInnerHTML={{ __html: node.frontmatter.description }} />
    
  </Container>
);

Post.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string.isRequired,
  }),
};

export default Post;
