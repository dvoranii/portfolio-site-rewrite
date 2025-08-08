import styled from "styled-components";

export const ProjectsSection = styled.section`
  width: 100%;
  margin-top: 2.4rem;
`;

export const ProjectsWrapper = styled.div`
  padding: 0 2.4rem 4.8rem;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 4.8rem;
`;

export const ProjectsGridWrapper = styled.div`
  padding: 2.4rem 0 2.4rem 0;
`;

// Modified GridItem with inner div for background
export const GridItem = styled.div`
  min-height: 200px;
  padding: 1rem;
  position: relative;
  overflow: hidden; // Crucial for containing the zoom effect
  /* border: 1px solid black; */
`;

// New inner div for background content
export const GridItemBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  transition: all 0.3s ease;
  z-index: 0;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);

  /* Dim non-hovered items */
  &:hover ${GridItem} ${GridItemBackground} {
    filter: brightness(0.5) saturate(0);
  }

  &:hover ${GridItem} img {
    filter: brightness(0.5) saturate(0.5);
  }

  &:hover ${GridItem}:hover ${GridItemBackground} {
    filter: none;
    transform: scale(1.05);
    cursor: pointer;
  }

  &:hover ${GridItem}:hover img {
    filter: none;
    transform: scale(1.05);
  }
`;

// Row 1
export const Project1 = styled(GridItem)`
  grid-column: span 3;
  min-height: 475px;
`;

export const Project2 = styled(GridItem)`
  grid-column: span 1;
`;

// Row 2
export const Project3 = styled(GridItem)`
  grid-column: span 2;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: auto;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
`;

export const Project4 = styled(GridItem)`
  grid-column: span 2;
`;

// Row 3
export const Project5 = styled(GridItem)`
  grid-column: span 1;
  height: 370px;
  background: #000;
`;

export const Project6 = styled(GridItem)`
  grid-column: span 3;
  height: 370px;
`;

export const Project7 = styled(GridItem)`
  grid-column: span 2;
  height: 400px;
`;

// Row 4
export const Project8 = styled(GridItem)`
  grid-column: span 2;
`;
