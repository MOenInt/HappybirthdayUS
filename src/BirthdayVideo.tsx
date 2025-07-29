import { AbsoluteFill, Sequence, useCurrentFrame, Audio } from 'remotion';
import { staticFile } from 'remotion';
import './styles.css';
import './fonts.css';

export const BirthdayVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#fff8f0',
        color: '#333',
        fontFamily: 'Ownglyph_StudyHard-Rg',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <Audio src={staticFile('studio-ghibli-lofi-380559.mp3')} />

      {/* Đoạn mở đầu */}
      <Sequence from={0} durationInFrames={150}>
        <div className="fade-in">
          <h1 style={{ fontSize: 70 }}>🎉 HAPPY BIRTHDAY, Hân! 🎉</h1>
        </div>
      </Sequence>

      {/* Quotes - 5s mỗi đoạn */}
      <Sequence from={150} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 36 }}>
            "Birthdays are not just milestones, they are reminders of how far you've come — quietly and gracefully."
          </em>
        </div>
      </Sequence>

      <Sequence from={300} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 34 }}>
            "You don't need to be loud to be strong. Your calm presence says more than words ever could."
          </em>
        </div>
      </Sequence>

      <Sequence from={450} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 34 }}>
            "Even on quiet days, your kindness speaks volumes. That matters more than you realize."
          </em>
        </div>
      </Sequence>

      <Sequence from={600} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 34 }}>
            "You’ve made it through a lot — not by force, but with quiet courage. That’s your strength."
          </em>
        </div>
      </Sequence>

      <Sequence from={750} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 34 }}>
            "You don’t have to shine all the time. Sometimes, just showing up is more than enough."
          </em>
        </div>
      </Sequence>

      <Sequence from={900} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 34 }}>
            "Keep choosing growth. Keep showing up. Life still has beautiful things waiting for you."
          </em>
        </div>
      </Sequence>

      <Sequence from={1050} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 34 }}>
            "Stay close to what gives you peace. Let go of what dims your light."
          </em>
        </div>
      </Sequence>

      <Sequence from={1200} durationInFrames={150}>
        <div className="fade-in">
          <em style={{ fontSize: 36 }}>
            "Happy Birthday. Wishing you a year filled with clarity, kindness — and quiet joy."
          </em>
        </div>
      </Sequence>

      {/* Gà nhảy + ảnh */}
      <img
        src={staticFile('Dance Chicken GIF.gif')}
        style={{
          position: 'absolute',
          bottom: 100,
          left: 120,
          width: 200,
          animation: 'bounce 1.2s infinite ease-in-out',
        }}
      />
      <img
        src={staticFile('Dance Chicken GIF.gif')}
        style={{
          position: 'absolute',
          top: 100,
          right: 120,
          width: 200,
          animation: 'bounce 1s infinite ease-in-out',
        }}
      />
      <img
        src={staticFile('gif.gif')}
        style={{
          position: 'absolute',
          middle: '45%',
          middle: 500,
          width: 500,
          animation: 'bounce 1s infinite ease-in-out',
        }}
      />
      <img
        src={staticFile('IMG_5298.jpeg')}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 80,
          width: 180,
          borderRadius: '50%',
          border: '5px solid white',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
        }}
      />
    </AbsoluteFill>
  );
};
