import { Box, Card, Container, Grid, styled, Typography } from "@mui/material";
import AnimationComponent from "../../../components/AnimationComponent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  const skillsSet = [
    "Javascript",
    "Typescript",
    "React",
    "Express",
    "Git",
    "HTML",
    "CSS",
    "Prisma ORM",
    "Ant-Design",
    "Canva",
    "Material UI",
    "Figma",
  ];
  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Experience
                </Typography>
                <Typography textAlign="center">1+ years</Typography>
                <Typography textAlign="center">Web Development</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Education
                </Typography>
                <Typography textAlign="center">Software Engineering</Typography>
                <Typography textAlign="center">
                  Universidade de Cabo Verde
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        {/*  <Box pb={1}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta
            semper velit vel rutrum. Aliquam vulputate, nisi eget tristique
            mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.
            Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.
            Nullam ultricies erat quam, eget porta velit vehicula sit amet.
            Nullam sodales iaculis metus, sed vestibulum nisl vulputate at.
            Integer in pulvinar libero. Donec ornare est quis tortor varius
            efficitur. Maecenas sed erat quis felis facilisis pellentesque. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nullam id felis convallis, luctus lorem eget, varius
            dolor.
          </Typography>
        </Box> */}
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid key={index} size={{ xs: 5, md: 2, sm: 4, lg: 2 }}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "10px 10px",
  textAlign: "center",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));
