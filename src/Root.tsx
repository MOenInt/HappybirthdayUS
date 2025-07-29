import "./index.css";
import { Composition } from "remotion";
import { BirthdayVideo } from "./BirthdayVideo";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import "./fonts.css";
registerRoot(BirthdayVideo);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BirthdayVideo"
        component={BirthdayVideo}
        durationInFrames={1400} // chỉnh lại để đủ thời lượng
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
