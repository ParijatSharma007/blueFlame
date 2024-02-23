/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unstable-nested-components */
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import GuideCard from "@/components/GuideCard/GuideCard";
import NotesCard from "@/components/NotesCard/NotesCard";
import PhoneInputCustom, {
  countries
} from "@/components/PhoneInputcustom/PhoneInputcustom";
// import Stepper from "@/components/Stepper/StepperComp";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import assest from "@/json/assest";
import complianceAnimation from "@/json/lottie/compliance.json";
import darksupportAnimation from "@/json/lottie/darksupport.json";
import salesAnimation from "@/json/lottie/demo1.json";
import interviewtAnimation from "@/json/lottie/interview.json";
import managementAnimation from "@/json/lottie/management.json";
import onboardingAnimation from "@/json/lottie/onboarding.json";
import presentationAnimation from "@/json/lottie/presentation.json";
import projectAnimation from "@/json/lottie/project.json";
import researchAnimation from "@/json/lottie/researchtwo.json";
import supportAnimation from "@/json/lottie/support.json";
import Wrapper from "@/layout/wrapper/Wrapper";
import styles from "@/styles/pages/register.module.scss";
import CustomButton from "@/ui/Buttons/CustomButton";
import OutlineButton from "@/ui/Buttons/OutlineButton";
import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import cloneDeep from "lodash.clonedeep";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const steps = [
  {
    label: "User setup",
    description:
      "Please enter your personal information for creating your account. "
  },
  {
    label: "Setup Guide",
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit ultrices platea dictumst cras. "
  },
  {
    label: "Calendar & Email Integration",
    description: ""
  },
  {
    label: "Bot Interaction",
    description:
      "Choose where the bot sends its comments and suggestions before and after a meeting. You can customize these based on the type of call separately (You may select multiple options):"
  },
  {
    label: "Your Notes",
    description: ""
  },
  {
    label: "Call Setup",
    description: ""
  },
  {
    label: "Done",
    description: "Congratulations! You have successfully created your account."
  }
];
const guideloop = [
  { lottie1: salesAnimation, lottie2: salesAnimation, text: "Sales" },
  { lottie1: managementAnimation, lottie2: managementAnimation, text: "Account Managment" },
  { lottie1: interviewtAnimation, lottie2: interviewtAnimation, text: "Recruiting / Interviewing" },
  { lottie1: projectAnimation, lottie2: projectAnimation, text: "Project Managment" },
  { lottie1: presentationAnimation, lottie2: presentationAnimation, text: "Management/Board Presentation" },
  { lottie1: onboardingAnimation, lottie2: onboardingAnimation, text: "Client onboarding/ Delivery" },
  { lottie1: supportAnimation, lottie2: darksupportAnimation, text: "Support" },
  { lottie1: researchAnimation, lottie2: researchAnimation, text: "Research" },
  { lottie1: complianceAnimation, lottie2: complianceAnimation, text: "Compliance Chaperoning" }
];
const notesloop = [
  {
    img1: assest.oneNote,
    img2: assest.oneNote,
    text: "Onenote",
    width_size: 52,
    height_size: 48
  },
  {
    img1: assest.salesforce,
    img2: assest.salesforce,
    text: "Salesforce",
    width_size: 60,
    height_size: 41
  },
  {
    img1: assest.hubspot,
    img2: assest.darkhub,
    text: "Hubspot",
    width_size: 72,
    height_size: 21
  },
  {
    img1: assest.notion,
    img2: assest.darknation,
    text: "Notion",
    width_size: 85,
    height_size: 31
  },
  {
    img1: assest.asana,
    img2: assest.darkasana,
    text: "Asana",
    width_size: 75,
    height_size: 49
  },
  {
    img1: assest.Trello,
    img2: assest.Trello,
    text: "Trello",
    width_size: 68,
    height_size: 38
  },
  {
    img1: assest.monday,
    img2: assest.darkmonday,
    text: "Monday.com",
    width_size: 182,
    height_size: 34
  }
];
const slackloop = [
  {
    img: assest.slackLogo,
    img2: assest.darkSlack,
    text: "Slack",
    _width_: 49,
    _height_: 18
  },
  {
    img: assest.TeamsLogo,
    img2: assest.TeamsLogo,
    text: "Teams",
    _width_: 34,
    _height_: 32
  }
];


const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  zIndex: 1,
  color: "#fff",
  width: 30,
  height: 30,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(180deg, #4facfe 0%, #24d2fe 100%)",
  position: "relative",
  fontWeight: "600",
  fontSize: "14px",
  ...(ownerState.active && {
    background: "linear-gradient(180deg, #4facfe 0%, #24d2fe 100%)"
  }),
  ...(ownerState.completed && {
    background: "linear-gradient(180deg, #4facfe 0%, #24d2fe 100%)"
  })
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      <span>{completed ? <CheckIcon /> : icon}</span>
    </ColorlibStepIconRoot>
  );
}

interface StepProps {
  handleNext?: () => void;
  handleBack?: () => void;
  handleReset?: () => void;
}

const UserSetup = ({ handleNext }: StepProps) => {
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [value, setValue] = useState("");
  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={styles.paper_head}>
        <Typography variant="h2">User setup</Typography>
        <Typography variant="body1">
          Please enter your personal information for creating your account.{" "}
        </Typography>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_one_body}`}>
        <Grid container columnSpacing={4} rowSpacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className={styles.form_field}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className={styles.form_field}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              className={styles.form_field}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <PhoneInputCustom
              id="phone"
              placeholder="Type here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onChangeCountryCode={(e) => setCountryCode(e.target.value)}
              countryCode={countryCode}
              className={`${styles.form_field} ${styles.phone_field}`}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              className={styles.form_field}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className={styles.form_field}
            />
          </Grid>
        </Grid>
        <Box className={styles.info_box}>
          <Image src={assest.info} alt="img" width={12} height={12} />
          <span>You can add additional users separately later</span>
        </Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I agree to the Terms of Service and Privacy Policy"
          className={styles.checkbox}
        />
        <Box
          className={`${styles.paper_footer} ${styles.first_foot} ${styles.mobile_first_foot}`}
        >
          <CustomButton onClick={handleNext} type="button">
            <Typography variant="button">Next</Typography>
          </CustomButton>
        </Box>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.first_foot}`}>
        <CustomButton onClick={handleNext} type="button">
          <Typography variant="button">Next</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};

const generateRandomId = () => {
  return Math.random() * 1000 + Date.now() * 100;
};

type NestedCheckBoxesType = {
  label: string;
  id: number;
  childrenNodes?: NestedCheckBoxesType[];
  checked?: boolean;
  parent?: NestedCheckBoxesType;
  indeterminate?: boolean;
};
const checkBoxesForSalesCall: NestedCheckBoxesType[] = [
  {
    label: "Save notes to CRM",
    id: generateRandomId()
  },
  {
    label: "Create action items as tasks in CRM",
    id: generateRandomId()
  },
  {
    label: "Save call interaction to CRM",
    id: generateRandomId(),
    childrenNodes: [
      {
        label: "Include call transcript",
        id: generateRandomId()
      }
    ]
  },
  {
    label: "Guide with playbooks",
    id: generateRandomId(),
    childrenNodes: [
      {
        label: "List show uploaded playbooks",
        id: generateRandomId()
      },
      {
        label: "Allow upload of additional",
        id: generateRandomId()
      }
    ]
  }
];

const nodeTransform = (
  node: NestedCheckBoxesType,
  parent?: NestedCheckBoxesType
) => {
  node = {
    ...node,
    checked: node?.checked ?? false,
    parent
  };

  node.childrenNodes = node?.childrenNodes?.map((item) =>
    nodeTransform(item, node)
  );

  if (
    node?.childrenNodes?.every((node) => {
      return node.checked;
    })
  ) {
    node.checked = true;
  }

  return node;
};

const transform = (data: NestedCheckBoxesType[]) => {
  return data.map((item) => nodeTransform(item));
};

const updateAncestors = (node: NestedCheckBoxesType) => {
  if (!node.parent) {
    return;
  }

  const { parent } = node;
  if (parent.childrenNodes?.some((node) => node.checked)) {
    parent.indeterminate = true;
  } else {
    parent.indeterminate = false;
  }
  if (parent.checked && !node.checked) {
    parent.checked = false;
    updateAncestors(parent);
    return;
  }

  if (!parent?.checked && node?.checked) {
    if (parent?.childrenNodes?.every((node) => node.checked)) {
      parent.checked = true;
      parent.indeterminate = false;
      updateAncestors(parent);
      return;
    }
  }

  return;
};

const toggleDescendants = (node: NestedCheckBoxesType) => {
  const { checked } = node;
  node?.childrenNodes?.forEach((node) => {
    node.checked = checked;
    toggleDescendants(node);
  });
};

const findNode = (
  nodes: NestedCheckBoxesType[],
  id: number,
  ids: number[]
): NestedCheckBoxesType => {
  if (ids.length === 0) {
    return nodes.filter((node) => node.id === id)?.[0];
  }

  let node: undefined | NestedCheckBoxesType = undefined;
  ids.forEach((_id) => {
    const candidates = node ? node.childrenNodes : nodes;
    node = candidates?.filter((node) => node.id === _id)?.[0];
  });
  return (node as NestedCheckBoxesType | undefined)?.childrenNodes?.filter(
    (node) => node.id === id
  )?.[0] as NestedCheckBoxesType;
};

const NestedCheckBoxes = ({
  label,
  childrenNodes,
  id,
  ids = [],
  onBoxChecked,
  checked,
  indeterminate
}: NestedCheckBoxesType & {
  ids: NestedCheckBoxesType["id"][];
  onBoxChecked: (
    checked: boolean,
    id: number,
    ids: NestedCheckBoxesType["id"][]
  ) => void;
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        control={
          <CustomCheckbox
            onChange={(_, checked) => onBoxChecked(checked, id, ids)}
            checked={checked}
            indeterminate={indeterminate}
          />
        }
      />
      {childrenNodes?.map((item) => {
        return (
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            <NestedCheckBoxes
              {...item}
              ids={[...ids, id]}
              onBoxChecked={onBoxChecked}
            />
          </Box>
        );
      })}
    </FormGroup>
  );
};

const CallSetup = ({ handleNext, handleBack }: StepProps) => {
  const [nodes, setNodes] = useState(transform(checkBoxesForSalesCall));

  const handleBoxChecked = (checked: boolean, id: number, ids: number[]) => {
    const node = findNode(nodes, id, ids);
    node.checked = checked;
    node.indeterminate = false;
    toggleDescendants(node);
    updateAncestors(node);
    setNodes(cloneDeep(nodes));
  };

  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={`${styles.paper_head} ${styles.callsetup_head}`}>
        <Box className={styles.call_set_head}>
          <Typography variant="h2">Automation Recipes</Typography>
          <Link href="/">Skip Now</Link>
        </Box>

        <Typography variant="body1">
          A 'Recipe' is automation that takes place based on a certain type of
          meeting. For example, if we determine you are running an interview,
          your recipe can help with resume analysis and suggested interview
          questions.
        </Typography>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_sixth_body}`}>
        <Box className={styles.check_box_step}>
          <Typography variant="h3">Configure Interview Call Setup</Typography>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={2}
            className={styles.check_space}
          >
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="Enable resume analysis"
                />
              </FormGroup>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<CustomCheckbox />}
                  label="Enable suggested questions"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.check_box_step}>
          <Typography variant="h3">Configure Sales Call Setup</Typography>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={2}
            className={styles.check_space}
          >
            {nodes.map((item) => (
              <Grid item lg={5} md={6} sm={12} xs={12}>
                <NestedCheckBoxes
                  {...item}
                  ids={[]}
                  onBoxChecked={handleBoxChecked}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className={styles.check_box_step}>
          <Typography variant="h3">
            Compliance & Ethics Chaperone Setup
          </Typography>
          <Typography variant="h4">
            Escalate On (You may select multiple options):
          </Typography>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={2}
            className={styles.check_space}
          >
            <Grid item xl={7} lg={8} md={12} sm={12} xs={12}>
              <Grid container rowSpacing={0} columnSpacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Potential MNPI"
                    />
                  </FormGroup>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Potential gift"
                    />
                  </FormGroup>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Potential pay to play"
                    />
                  </FormGroup>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Potential contact"
                    />
                  </FormGroup>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Information sharing"
                    />
                  </FormGroup>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormGroup>
                    <FormControlLabel
                      control={<CustomCheckbox />}
                      label="Potential harassment"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.check_box_step}>
          <Typography variant="h3">Escalate Via:</Typography>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={2}
            className={styles.check_space}
          >
            <Grid item md={6}>
              <Box className={styles.radio_sec}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <Box className={styles.radio_one}>
                      <FormControlLabel
                        value="Email"
                        control={<Radio />}
                        label="Email Address"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Enter email address"
                        variant="outlined"
                        className={styles.form_field}
                      />
                    </Box>
                    <Box className={styles.radio_one}>
                      <FormControlLabel
                        value="Test"
                        control={<Radio />}
                        label="Test Message"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Enter Mobile Number"
                        variant="outlined"
                        className={styles.form_field}
                      />
                    </Box>
                  </RadioGroup>
                </FormControl>
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box className={styles.setup_last}>
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckbox />}
                    label="Interrupt Call with Reminder of Compliance Requirements?"
                  />
                </FormGroup>
                <Box className={styles.voice_sec}>
                  <Box className={styles.info_area}>
                    <Image src={assest.info} alt="img" width={12} height={12} />
                    <span>
                      Upon detection of potential compliance concerns, the
                      Aperture AI bot can remind participants of their
                      compliance obligations.
                    </span>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.second_foot}`}>
        <OutlineButton onClick={handleBack} type="button">
          <Typography variant="button">Previous</Typography>
        </OutlineButton>
        <CustomButton onClick={handleNext} type="button">
          <Typography variant="button">Next</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};

const SetupGuide = ({ handleNext, handleBack }: StepProps) => {
  const [activeCard, setActiveCard] = useState(-1);
  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={styles.paper_head}>
        <Typography variant="h2">setup Guide</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur. Massa at nibh orci ultrices.
        </Typography>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_two_body}`}>
        <Typography variant="h3">
          I Conduct The Following Types of Calls (You May Select Multiple Calls){" "}
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={3}>
          {guideloop.map((item, index) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={6}>
                <GuideCard
                  onClick={() => setActiveCard(index)}
                  isActive={activeCard === index}
                  item={item}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={styles.upper_paper_footer}>
        <Box className={styles.voice_sec}>
          <Typography variant="h6">Preferred Voice</Typography>
          <Box className={styles.info_area}>
            <Image src={assest.info} alt="img" width={12} height={12} />
            <span>
              You can refer to your bot during calls with asks like "Hey
              Aperture AI, schedule a follow up with the group here for 1 month
              from now" or "Hey Aperture AI, remind us to follow up with Julie
              on the blog post"
            </span>
          </Box>
          <FormControl className={styles.radio}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.second_foot}`}>
        <OutlineButton onClick={handleBack} type="button">
          <Typography variant="button">Previous</Typography>
        </OutlineButton>
        <CustomButton onClick={handleNext} type="button">
          <Typography variant="button">Next</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};
const Integration = ({ handleNext, handleBack }: StepProps) => {
  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={styles.paper_head}>
        <Typography variant="h2">Calendar & Email Integration</Typography>
        <Typography variant="body1">
          Aperture AI can integrate with your calendar to automatically join
          your meetings.
        </Typography>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_three_body}`}>
        <Box className={styles.checkArea}>
          <FormGroup>
            <FormControlLabel
              control={<CustomCheckbox />}
              label="Automatically join meetings off my calendar"
            />
          </FormGroup>
          <Box className={styles.voice_sec}>
            <Box className={styles.info_area}>
              <Image src={assest.info} alt="img" width={12} height={12} />
              <span>
                Your bot will automatically join all online meetings from your
                Calendar. It will join as "&#60;First Name's&#62; Aperture AI
                Bot.
              </span>
            </Box>
          </Box>
        </Box>
        <Box className={styles.checkArea}>
          <FormGroup>
            <FormControlLabel
              control={<CustomCheckbox />}
              label="Use my email for intelligence about meetings"
            />
          </FormGroup>
          <Box className={styles.voice_sec}>
            <Box className={styles.info_area}>
              <Image src={assest.info} alt="img" width={12} height={12} />
              <span>
                The Aperture AI bot will search your emails for content relevant
                to your meetings and include it as context in its suggestions
                for the meetings. E.g. it can search your email for a resume
                ahead of an interview.
              </span>
            </Box>
          </Box>
        </Box>
        <Box className={styles.setupArea}>
          <Typography variant="h3">Setup with</Typography>
          <Box className={styles.social_card}>
            <Card>
              <CardContent>
                <Image
                  src={assest.microsoft}
                  alt="img"
                  width={37}
                  height={37}
                />
                <Typography variant="body1">Office 365</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Image
                  src={assest.googleIcon}
                  alt="img"
                  width={37}
                  height={37}
                />
                <Typography variant="body1">Google</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.second_foot}`}>
        <OutlineButton onClick={handleBack} type="button">
          <Typography variant="button">Previous</Typography>
        </OutlineButton>
        <CustomButton onClick={handleNext} type="button">
          <Typography variant="button">Next</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};
const Interaction = ({ handleNext, handleBack }: StepProps) => {
  const { theme } = useAppSelector((state) => state.globalSlice);
  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={styles.paper_head}>
        <Typography variant="h2">Bot Interaction</Typography>
        <Typography variant="body1">
          Choose where the bot sends its comments and suggestions before and
          after a meeting. You can customize these based on the type of call
          separately (You may select multiple options):
        </Typography>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_fourth_body}`}>
        <Box className={styles.webchat}>
          <CustomCheckbox />
          <Box className={styles.webchat_right}>
            <Box className={styles.chat_box}>
              <Card>
                <CardContent>
                  <Image
                    src={assest.webchat}
                    alt="img"
                    width={74}
                    height={74}
                  />
                </CardContent>
              </Card>
              <Box className={styles.web_right}>
                <Typography variant="h3">Web chat</Typography>
                <Box className={styles.voice_sec} sx={{ display: { sm: "block", xs: "none" } }}>
                  <Box className={styles.info_area}>
                    <Image src={assest.info} alt="img" width={12} height={12} />
                    <span>
                      Chat messages to/from your bot are always visible at
                      Aperture AI.ai
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.voice_sec} sx={{ display: { sm: "none", xs: "block" }, marginTop: "10px" }}>
              <Box className={styles.info_area}>
                <Image src={assest.info} alt="img" width={12} height={12} />
                <span>
                  Chat messages to/from your bot are always visible at
                  Aperture AI.ai
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 8 }}
          rowSpacing={2}
        >
          {slackloop.map((item) => {
            return (
              <Grid item md={6} sm={12} xs={12}>
                <Box className={styles.slack}>
                  <CustomCheckbox />
                  <Box className={styles.slack_box}>
                    <Card>
                      <CardContent>
                        {theme === 'dark-mode' ? (<Image
                          src={item.img2}
                          alt="img"
                          width={item._width_}
                          height={item._height_}
                        />) : (<Image
                          src={item.img}
                          alt="img"
                          width={item._width_}
                          height={item._height_}
                        />)}

                      </CardContent>
                    </Card>
                    <Box className={styles.text_sec}>
                      <Typography variant="h4">{item.text}</Typography>
                      <Link href="/">Setup now</Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box className={styles.sms_area}>
          <Box className={styles.sms_check}>
            <Box className={styles.sms_left}>
              <CustomCheckbox />
              <span>SMS</span>
            </Box>
            <Box className={styles.verify}>
              <Link href="/">Verify now</Link>
            </Box>
          </Box>
          <Box className={styles.sms_field}>
            <Grid container columnSpacing={4} rowSpacing={3}>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  className={styles.form_field}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Confirm mobile number"
                  variant="outlined"
                  className={styles.form_field}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.second_foot}`}>
        <OutlineButton onClick={handleBack} type="button">
          <Typography variant="button">Previous</Typography>
        </OutlineButton>
        <CustomButton onClick={handleNext} type="button">
          <Typography variant="button">Next</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};
const Notes = ({ handleNext, handleBack }: StepProps) => {
  const [activeCard, setActiveCard] = useState(-1);
  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={`${styles.paper_head} ${styles.fifth_paper_head}`}>
        <Typography variant="h2">
          Do you store your notes or action items in a 3rd party tool?
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur. Sed posuere non massa turpis
          dolor lorem.
        </Typography>
        <Box className={styles.info_area_head}>
          <span>Allow Enabling Options For:</span>
          <Link href="/">Skip Now</Link>
        </Box>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_fifth_body}`}>
        <Grid container columnSpacing={3} rowSpacing={3}>
          {notesloop.map((item, index) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={6}>
                <Box>
                  <NotesCard
                    onActive={() => setActiveCard(index)}
                    isActive={activeCard === index}
                    item={item}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.second_foot}`}>
        <OutlineButton onClick={handleBack} type="button">
          <Typography variant="button">Previous</Typography>
        </OutlineButton>
        <CustomButton onClick={handleNext} type="button">
          <Typography variant="button">Next</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};
const StepDone = ({ handleBack }: StepProps) => {
  return (
    <Paper elevation={10} className={styles.paper_area}>
      <Box className={styles.paper_head}>
        <Typography variant="h2">Done</Typography>

        <Typography variant="body1">
          Congratulations! You have successfully created your account.
        </Typography>
      </Box>
      <Box className={`${styles.paper_body} ${styles.step_seven_body}`}>
        <Typography variant="h3">
          Please Follow The Instruction Presented Below to Complete The Final
          Setup.
        </Typography>
        <Box className={styles.plugins}>
          <Box className={styles.card}>
            <Card>
              <CardContent>
                <Image src={assest.zoom} alt="img" width={21} height={25} />
              </CardContent>
            </Card>
            <Typography variant="body1">
              Install the Zoom plugin{" "}
              <Link href="/">
                &#60;https://zoom.us/support/download?os=android&#62;
              </Link>
            </Typography>
          </Box>
          <Box className={styles.card}>
            <Card>
              <CardContent>
                <Image
                  src={assest.TeamsLogo}
                  alt="img"
                  width={22}
                  height={21}
                />
              </CardContent>
            </Card>
            <Typography variant="body1">
              Install the Teams plugin{" "}
              <Link href="/">
                &#60;https://www.microsoft.com/en-in/microsoft-teams/download-app&#62;
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box className={styles.last_link}>
          <Link href="/">Turn on browser notifications if not on</Link>
          <Link href="/">Setup a test call and try it out</Link>
        </Box>
      </Box>
      <Box className={`${styles.paper_footer} ${styles.second_foot} ${styles.last_tab_foot}`}>
        <OutlineButton onClick={handleBack} type="button">
          <Typography variant="button">Previous</Typography>
        </OutlineButton>
        <CustomButton type="button">
          <Typography variant="button">Go to main page</Typography>
        </CustomButton>
      </Box>
    </Paper>
  );
};

const Index = () => {

  //   const [phone, setPhone] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const RenderItems = (
    <>
      {activeStep === 0 && (
        <UserSetup
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}
      {activeStep === 1 && (
        <SetupGuide
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}

      {activeStep === 2 && (
        <Integration
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}

      {activeStep === 3 && (
        <Interaction
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}

      {activeStep === 4 && (
        <Notes
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}
      {activeStep === 5 && (
        <CallSetup
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}
      {activeStep === 6 && (
        <StepDone
          handleNext={handleNext}
          handleBack={handleBack}
          handleReset={handleReset}
        />
      )}
    </>
  );

  return (
    <Wrapper>
      <Box className={`cmn_gap ${styles.register_page}`}>
        <Container fixed>
          <Box className={styles.main_wrap}>
            <Box className={styles.left_wrap}>
              <Box className={styles.stepper_sec}>
                <Box className={styles.stepper_inner}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          StepIconComponent={ColorlibStepIcon}
                          onClick={() => setActiveStep(index)}
                        >
                          {step.label}
                        </StepLabel>

                        <StepContent className={styles.mobile_step}>
                          <Typography className={styles.mobile_description}>
                            {step.description}
                          </Typography>
                          {RenderItems}
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Box>
              </Box>
            </Box>
            <Box className={styles.right_wrap}>
              {/* <UserSetup /> */}
              {RenderItems}
              {/* <Integration /> */}
              {/* <Interaction /> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Index;
