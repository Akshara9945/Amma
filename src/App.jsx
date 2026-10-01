import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./App.css";

import two_1 from "./assets/photos/two_1.jpg";
import two_2 from "./assets/photos/two_2.jpg";
import two_3 from "./assets/photos/two_3.jpg";
import two_4 from "./assets/photos/two_4.jpg";
import five from "./assets/photos/five.jpg";
import five1 from "./assets/photos/five1.jpg";
import five2 from "./assets/photos/five2.jpg";
import five3 from "./assets/photos/five3.jpg";
import sev from "./assets/photos/sev.jpg";
import sev1 from "./assets/photos/sev1.jpg";
import sev2 from "./assets/photos/sev2.jpg";
import sev3 from "./assets/photos/sev3.jpg";
import sev4 from "./assets/photos/sev4.jpg";
import sev5 from "./assets/photos/sev5.jpg";
import sev6 from "./assets/photos/sev6.jpg";
import sev7 from "./assets/photos/sev7.jpg";
import sev8 from "./assets/photos/sev8.jpg";
import E1 from "./assets/photos/E1.jpg";
import E2 from "./assets/photos/E2.jpg";
import E3 from "./assets/photos/E3.jpg";
import E4 from "./assets/photos/E4.jpg";
import E5 from "./assets/photos/E5.jpg";
import E6 from "./assets/photos/E6.jpg";
import child from "./assets/photos/child.jpg";
import cousin1 from "./assets/photos/cousin1.jpg";
import cousin2 from "./assets/photos/cousin2.jpg";
import cousin3 from "./assets/photos/cousin3.jpg";
import cousin4 from "./assets/photos/cousin4.jpg";
import dostii from "./assets/photos/dostii.jpg";
import dostii1 from "./assets/photos/dostii1.jpg";
import dostii2 from "./assets/photos/dostii2.jpg";
import off1 from "./assets/photos/off1.jpg";
import off2 from "./assets/photos/off2.jpg";
import off3 from "./assets/photos/off3.jpg";
import off4 from "./assets/photos/off4.jpg";
import off5 from "./assets/photos/off5.jpg";
import last from "./assets/photos/last.jpg";


/* =====================================================
   PHOTO / STORY DATA
===================================================== */

const lifeChapters = [
  {
    id: 1,
    chapter: "CHAPTER 01",
    era: "THE LITTLE GIRL",
    title: "Before she was Amma...",
    description:
      "Before she became the woman everyone knows today, she was someone's little girl — growing up, laughing, dreaming and creating memories of her own.",
    photos: [child],
  },

  {
    id: 2,
    chapter: "CHAPTER 02",
    era: "FAMILY",
    title: "The daughter she has always been...",
    description:
      "Before becoming a mother herself, she was a daughter, a granddaughter, a sister and a part of a family that shaped the person she became.",
    photos: [two_1, two_2, two_3],
  },

  {
    id: 3,
    chapter: "CHAPTER 03",
    era: "COLLEGE DAYS",
    title: "The girl with her gang...",
    description:
      "College wasn't just about classes. There were friendships, laughter, endless stories, little adventures and the version of her that knew exactly how to have fun.",
    photos: [dostii2,dostii1,dostii],
  },

  {
    id: 4,
    chapter: "CHAPTER 04",
    era: "COUSINS • MASTII",
    title: "The fun side of her...",
    description:
      "Because Amma wasn't always Amma. Sometimes she was the loud one, the funny one, the mischievous one, the one laughing until her stomach hurt.",
    photos: [cousin1, cousin2, cousin3],
  },

  {
    id: 5,
    chapter: "CHAPTER 05",
    era: "MOTHERHOOD",
    title: "And then... she became my Amma. ❤️",
    description:
      "Out of everything she has been in her life, this is the role I feel luckiest to have experienced from the closest place possible.",
    photos: [five,five1,five2,five3],
  },

  {
    id: 6,
    chapter: "CHAPTER 06",
    era: "HER WORK • HER PEOPLE • HER JOURNEY",
    title: "The woman everyone at work knew and loved...",
    description:
      "She cared for everyone around her, and they cared for her too. Through friendships, celebrations and countless events, she never let age stop her from living every moment.",
    photos: [off2,off3,off4],
  },

  {
    id: 7,
    chapter: "CHAPTER 07",
    era: "THE WOMAN BEHIND EVERY ROLE",
    title: "A caring daughter. A sister. A friend. A teacher. A human being.",
    description:
      "There is so much more to her than one role. She has spent years caring for people, showing up for them and making them feel loved in ways she may not even realise.",
    photos: [sev1,sev,sev3,sev4,sev2,sev5,sev6,sev7,sev8],
  },

  {
    id: 8,
    chapter: "CHAPTER 08",
    era: "MY AMMA",
    title: "The woman I call home.",
    description:
      "A caring mother. A loving daughter. A teacher. A sister. A friend. A person who gives more than she asks for. And somehow, all of that is my Amma.",
    photos: [E2, E5, E3, E1, E4, E6],
  },
];

/* =====================================================
   THINGS I NEVER SAY ENOUGH
===================================================== */

const messages = [
  {
    number: "01",
    title: "Thank you.",
    text:
      "For all the little things you do that I sometimes forget to notice.",
  },

  {
    number: "02",
    title: "You are my safe place.",
    text:
      "No matter how old I grow, a part of me will always feel at home with you.",
  },

  {
    number: "03",
    title: "I am proud of you.",
    text:
      "Not just because you are my mother, but because of the person you are.",
  },

  {
    number: "04",
    title: "You have so many lives inside one life.",
    text:
      "You have been a daughter, sister, friend, teacher, wife and mother — and you have given something beautiful to every role.",
  },

  {
    number: "05",
    title: "And finally...",
    text:
      "I love you Amma. More than these little words could ever explain. ❤️",
  },
];

/* =====================================================
   APP
===================================================== */

function App() {
  const [stage, setStage] = useState("opening");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [stage]);

  const celebrate = () => {
    confetti({
      particleCount: 220,
      spread: 130,
      startVelocity: 40,
      gravity: 0.8,
      origin: {
        x: 0.5,
        y: 0.55,
      },
    });
  };

  const openBirthday = () => {
    setStage("birthday");

    setTimeout(() => {
      celebrate();
    }, 500);
  };

  const openMemories = () => {
    setStage("memories");
  };

  const openThings = () => {
    setStage("things");
  };

  const openGift = () => {
    setStage("gift");
  };

  const openLetter = () => {
    setStage("letter");
  };

  const openFinale = () => {
    setStage("finale");

    setTimeout(() => {
      celebrate();
    }, 600);
  };

  return (
    <AnimatePresence mode="wait">

      {stage === "opening" && (
        <Opening
          key="opening"
          onComplete={openBirthday}
        />
      )}

      {stage === "birthday" && (
        <BirthdayReveal
          key="birthday"
          openMemories={openMemories}
        />
      )}

      {stage === "memories" && (
        <Memories
          key="memories"
          onNext={openThings}
        />
      )}

      {stage === "things" && (
        <ThingsISay
          key="things"
          onNext={openGift}
        />
      )}

      {stage === "gift" && (
        <Gift
          key="gift"
          onNext={openLetter}
        />
      )}

      {stage === "letter" && (
        <FinalLetter
          key="letter"
          onNext={openFinale}
        />
      )}

      {stage === "finale" && (
        <Finale key="finale" />
      )}

    </AnimatePresence>
  );
}

/* =====================================================
   OPENING
   FUNNY CHUBBY GIRL SURPRISE
===================================================== */

function Opening({ onComplete }) {
  const [phase, setPhase] = useState(0);

  /* ---------------------------------------------
     PHASE 0 → PHASE 1
     Knock for exactly 3 seconds
  --------------------------------------------- */

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(1);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  /* ---------------------------------------------
     INTRO → FUNNY GIFT
  --------------------------------------------- */

  const startSurprise = () => {
    setPhase(3);

    setTimeout(() => {
      setPhase(4);
    }, 2500);
  };

  /* ---------------------------------------------
     BIRTHDAY REVEAL
  --------------------------------------------- */

  const revealBirthday = () => {
    setPhase(5);

    setTimeout(() => {
      onComplete();
    }, 3200);
  };

  return (
    <motion.section
      className="opening-cute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
      }}
      transition={{ duration: 0.8 }}
    >

      <div className="cute-background">

        <motion.span
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          🌸
        </motion.span>

        <motion.span
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.span>

        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
          }}
        >
          🎀
        </motion.span>

        <motion.span
          animate={{ y: [0, 14, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          💗
        </motion.span>

        <motion.span
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

      </div>

      <motion.div
        className="cute-date"
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 0.7,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        OCTOBER 02 ❤️
      </motion.div>

      <AnimatePresence mode="wait">

        {/* =================================================
            PHASE 0 — KNOCK KNOCK
        ================================================= */}

        {phase === 0 && (
          <motion.div
            key="knock"
            className="knock-scene"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <motion.div
              className="knock-girl"
              animate={{
                x: [0, 0, -7, 7, -7, 7, 0],
              }}
              transition={{
                duration: 2.6,
                delay: 0.4,
                times: [
                  0,
                  0.35,
                  0.45,
                  0.55,
                  0.65,
                  0.75,
                  1,
                ],
                ease: "easeInOut",
              }}
            >
              <CuteGirl />
            </motion.div>

            <motion.div
              className="knock-bubble"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.7,
                type: "spring",
              }}
            >
              <strong>
                Knock knock... 🚪
              </strong>

              <span>
                Ammaaaa... 👀
              </span>
            </motion.div>

            <motion.div
              className="knock-sound"
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: 3,
              }}
            >
              TAP TAP TAP! 😂
            </motion.div>

          </motion.div>
        )}

        {/* =================================================
            PHASE 1 — HELLO
        ================================================= */}

        {phase === 1 && (
          <motion.div
            key="waiting"
            className="cute-scene"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >

            <CuteGirl />

            <div className="cute-speech">

              <span>
                HELLOOO? 👀
              </span>

              <p>
                Amma...
                <br />
                Open the door! 😂
              </p>

            </div>

            <motion.button
              className="story-button cute-button"
              onClick={() => setPhase(2)}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Click here pleaseeeeeeee!!
              <span>→</span>
            </motion.button>

          </motion.div>
        )}

        {/* =================================================
            PHASE 2 — ORIGINAL INTRO
        ================================================= */}

        {phase === 2 && (
          <motion.div
            key="intro"
            className="cute-scene"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.9,
            }}
          >

            <CuteGirl />

            <motion.div
              className="cute-speech"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
            >

              <span>
                Shhh... 🤫
              </span>

              <p>
                Oyeeeeeeeeeeeeee... Amma!
                <br />
                I have a little surprise for you...
              </p>

            </motion.div>

            <motion.button
              className="story-button cute-button"
              onClick={startSurprise}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              What surprise? 👀
              <span>→</span>
            </motion.button>

          </motion.div>
        )}

        {/* =================================================
            PHASE 3 — FUNNY GIFT
        ================================================= */}

        {phase === 3 && (
          <motion.div
            key="funny"
            className="cute-scene"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <CuteGirl carryingGift />

            <motion.div
              className="cute-speech"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >

              <span>
                Ayyooooo devreee... 😅
              </span>

              <p>
                I came running to wish you...
                <br />
                but this gift is HEAVY! 😂
              </p>

            </motion.div>

          </motion.div>
        )}

        {/* =================================================
            PHASE 4 — WAIT / TELL ME
        ================================================= */}

        {phase === 4 && (
          <motion.div
            key="secret"
            className="cute-scene"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <CuteGirl happy />

            <motion.div
              className="cute-speech"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
              }}
            >

              <span>
                WAIT... 🎀
              </span>

              <p>
                I almost forgot the most important part...
                <br />
                WHY I CAME HERE! 😂
              </p>

            </motion.div>

            <motion.button
              className="story-button cute-button"
              onClick={revealBirthday}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Click here to know..!
              <span>→</span>
            </motion.button>

          </motion.div>
        )}

        {/* =================================================
            PHASE 5 — FINAL BIRTHDAY REVEAL
        ================================================= */}

        {phase === 5 && (
          <motion.div
            key="birthday"
            className="cute-birthday"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >

            <CuteGirl happy />

            <motion.span
              className="birthday-small-message"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
            >
              SURPRISE!!! 🎉
            </motion.span>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.7,
                duration: 1,
                type: "spring",
              }}
            >
              HAPPY
              <br />

              <span>
                BIRTHDAY
              </span>

              <br />

              <strong>
                AMMA! ❤️
              </strong>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.4,
              }}
            >
              Your little surprise
              <br />
              has finally arrived. 🎀
            </motion.p>

          </motion.div>
        )}

      </AnimatePresence>

    </motion.section>
  );
}

/* =====================================================
   CUTE GIRL
===================================================== */

function CuteGirl({
  carryingGift = false,
  happy = false,
}) {
  return (
    <motion.div
      className="cute-girl-wrapper"
      animate={{
        y: [0, -8, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      {carryingGift && (
        <motion.div
          className="girl-gift"
          animate={{
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          🎁
        </motion.div>
      )}

      <div className="girl-hair">
        <div className="girl-hair-bun left" />
        <div className="girl-hair-bun right" />
      </div>

      <div className="girl-head">

        <div className="girl-face">

          <span className="girl-eye left" />
          <span className="girl-eye right" />

          <span className="girl-cheek left" />
          <span className="girl-cheek right" />

          <span className="girl-mouth">
            {happy ? "◡" : "◡"}
          </span>

        </div>

        <div className="girl-bow">
          🎀
        </div>

      </div>

      <div className="girl-body">

        <div className="girl-arm left" />
        <div className="girl-arm right" />

        <div className="girl-dress" />

      </div>

      <div className="girl-feet">
        <span />
        <span />
      </div>

    </motion.div>
  );
}

/* =====================================================
   BIRTHDAY REVEAL
===================================================== */

function BirthdayReveal({ openMemories }) {
  return (
    <motion.section
      className="birthday-screen-new"
      initial={{
        opacity: 0,
        scale: 1.08,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 1.2,
      }}
    >

      <motion.div
        className="birthday-glow"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1.5,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
        }}
      />

      <div className="birthday-particles">
        <span>✦</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
      </div>

      <motion.div
        className="reveal-balloon balloon-one"
        initial={{
          y: "100vh",
          rotate: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotate: 5,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          delay: 0.2,
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="reveal-balloon balloon-two"
        initial={{
          y: "100vh",
          rotate: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotate: -5,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.35,
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="reveal-balloon balloon-three"
        initial={{
          y: "100vh",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2.2,
          delay: 0.5,
        }}
      >
        🎈
      </motion.div>

      <div className="birthday-content">

        <motion.span
          className="birthday-eyebrow"
          initial={{
            opacity: 0,
            letterSpacing: "12px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            delay: 0.7,
            duration: 1.5,
          }}
        >
          THE SURPRISE IS JUST BEGINNING
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.55,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.3,
            type: "spring",
          }}
        >
          HAPPY
          <br />

          <span>
            BIRTHDAY
          </span>

          <br />

          <strong>
            AMMA! ❤️
          </strong>
        </motion.h1>

        <motion.div
          className="birthday-divider"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 100,
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
        />

        <motion.p
          className="birthday-subtitle-new"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2,
          }}
        >
          But before we talk about being my Amma...
          <br />
          let's go back to the beginning. ❤️
        </motion.p>

        <motion.button
          className="story-button reveal-button"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.7,
          }}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={openMemories}
        >
          Let's go back in time
          <span>→</span>
        </motion.button>

      </div>

    </motion.section>
  );
}

/* =====================================================
   AMMA'S LIFE STORY
===================================================== */

function Memories({ onNext }) {
  return (
    <motion.section
      className="life-story-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
      }}
    >

      <motion.div
        className="life-story-header"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >

        <span>
          A LITTLE JOURNEY THROUGH HER LIFE
        </span>

        <h2>
          Before she was
          <br />
          <em>my Amma...</em>
        </h2>

        <p>
          There was a whole beautiful story
          <br />
          waiting to be discovered. ❤️
        </p>

      </motion.div>

      <div className="life-chapter-list">

        {lifeChapters.map((chapter, index) => (

          <motion.article
            className="life-chapter"
            key={chapter.id}
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
            }}
          >

            <div className="life-chapter-number">
              {chapter.chapter}
            </div>

            <div className="life-chapter-heading">

              <span>
                {chapter.era}
              </span>

              <h3>
                {chapter.title}
              </h3>

            </div>

            {chapter.photos.length > 0 ? (

              <div className="life-photo-grid">

                {chapter.photos.map(
                  (photo, photoIndex) => (

                    <motion.div
                      className="life-photo"
                      key={`${chapter.id}-${photoIndex}`}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        rotate:
                          photoIndex % 2 === 0
                            ? -2
                            : 2,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate:
                          photoIndex % 2 === 0
                            ? -1
                            : 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      whileHover={{
                        scale: 1.03,
                        rotate: 0,
                      }}
                    >

                      <img
                        src={photo}
                        alt={chapter.title}
                      />

                    </motion.div>

                  )
                )}

              </div>

            ) : (

              <div className="future-photo-placeholder">
                <span>📸</span>
                <p>
                  More memories from this chapter
                  <br />
                  will be added here ❤️
                </p>
              </div>

            )}

            <motion.div
              className="life-chapter-text"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >

              <p>
                {chapter.description}
              </p>

            </motion.div>

          </motion.article>

        ))}

      </div>

      <motion.div
        className="life-story-transition"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1,
        }}
      >

        <span>
          AND AFTER ALL THOSE YEARS...
        </span>

        <h2>
          She became my Amma. ❤️
        </h2>

        <p>
          But that's not the end of her story.
          <br />
          That's where my favourite chapter begins.
        </p>

        <motion.button
          className="story-button"
          onClick={onNext}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          There are things I want to tell you
          <span>→</span>
        </motion.button>

      </motion.div>

    </motion.section>
  );
}

/* =====================================================
   THINGS I NEVER SAY ENOUGH
===================================================== */

function ThingsISay({ onNext }) {
  return (
    <motion.section
      className="things-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
      }}
    >

      <motion.div
        className="things-header"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >

        <span>
          A LITTLE CONFESSION
        </span>

        <h2>
          Things I Never
          <br />
          Say Enough
          <br />
        </h2>

        <p>
          Some things are easier to write than to say.
        </p>

      </motion.div>

      <div className="things-list">

        {messages.map((message, index) => (

          <motion.div
            className="message-card"
            key={message.number}
            initial={{
              opacity: 0,
              y: 70,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
          >

            <span className="message-number">
              {message.number}
            </span>

            <div>

              <h3>
                {message.title}
              </h3>

              <p>
                {message.text}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

      <motion.div
        className="things-ending"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >

        <span>
          JUST BETWEEN US...
        </span>

        <p>
          I don't always say these things.
          <br />
          But I hope you always know them. ❤️
        </p>

        <motion.button
          className="story-button"
          onClick={onNext}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          I have something for you 🎁
        </motion.button>

      </motion.div>

    </motion.section>
  );
}

/* =====================================================
   GIFT
===================================================== */

function Gift({ onNext }) {
  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);

    confetti({
      particleCount: 160,
      spread: 110,
      startVelocity: 34,
      gravity: 0.8,
      origin: {
        x: 0.5,
        y: 0.55,
      },
    });
  };

  return (
    <motion.section
      className="gift-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 1,
      }}
    >

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            className="gift-content"
            key="closed"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
          >

            <motion.span className="gift-label">
              ONE LITTLE SURPRISE
            </motion.span>

            <motion.h2>
              I got something
              <br />
              for you...
            </motion.h2>

            <motion.button
              className="gift-box"
              onClick={openGift}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.9,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <span className="gift-lid">
                🎀
              </span>

              <span className="gift-body">
                🎁
              </span>

            </motion.button>

            <motion.p>
              Tap the gift ❤️
            </motion.p>

          </motion.div>

        ) : (

          <motion.div
            className="gift-reveal"
            key="opened"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >

            <span className="gift-label">
              FOR MY MUMMY ❤️
            </span>

            <h2>
              If I could give you
              <br />
              one thing...
            </h2>

            <p>
              I wouldn't give you something that could be wrapped.
              <br />
              I would give you all the happiness,
              <br />
              love and peace that you have given me.
            </p>

            <motion.div
              className="gift-heart"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.div>

            <p className="gift-small">
              Because you deserve the whole world.
            </p>

            <motion.button
              className="story-button"
              onClick={onNext}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Read my letter 💌
              <span>→</span>
            </motion.button>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.section>
  );
}

/* =====================================================
   FINAL LETTER
===================================================== */

function FinalLetter({ onNext }) {
  return (
    <motion.section
      className="letter-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 1,
      }}
    >

      <motion.div
        className="letter-container"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >

        <motion.span
          className="letter-label"
          initial={{
            opacity: 0,
            letterSpacing: "8px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            duration: 1.5,
          }}
        >
          FROM YOUR LITTLE GIRL ❤️
        </motion.span>

        <motion.div
          className="letter-paper"
          initial={{
            opacity: 0,
            scale: 0.88,
            rotateX: 12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 1.2,
          }}
        >

          <p className="letter-dear">
  Dear Amma,
</p>

<p>
  Enilla... yellarigu care madu, but nang jasti maadu. Bare bare sinchu sinchu ant heli hotti urasbyada. 
</p>

<p>
  Laguna party kodu! 😌😂
</p>

<p className="letter-love">
  I love you more than words can say. ❤️
</p>

<p className="letter-sign">
  Happy Birthday Amma ❤️
  <br />
  With all my love,
  <br />
  Your Son ❤️
</p>

        </motion.div>

        <motion.div
          className="letter-next"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
        >

          <p>
            One last thing...
          </p>

          <motion.button
            className="story-button"
            onClick={onNext}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Take me to the end ✨
            <span>→</span>
          </motion.button>

        </motion.div>

      </motion.div>

    </motion.section>
  );
}

/* =====================================================
   FINALE
===================================================== */

function Finale() {
  return (
    <motion.section
      className="finale-screen"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
    >

      <motion.div
        className="finale-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="finale-particles">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
      </div>

      <motion.div
        className="finale-content"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >

        <motion.div
          className="finale-photo-wrapper"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1.2,
          }}
        >

          <motion.img
            src={last}
            alt="A beautiful memory with Amma"
            animate={{
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="finale-photo-overlay" />

        </motion.div>

        <motion.span
          className="finale-label"
          initial={{
            opacity: 0,
            letterSpacing: "8px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "4px",
          }}
          transition={{
            delay: 1.2,
            duration: 1.2,
          }}
        >
          AND ONE LAST THING ❤️
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          HAPPY BIRTHDAY,
          <br />

          <span>
             AMMA
          </span>{" "}
          ❤️
        </motion.h1>

        <motion.div
          className="finale-line"
          initial={{
            width: 0,
          }}
          animate={{
            width: 90,
          }}
          transition={{
            delay: 2.3,
            duration: 1,
          }}
        />

        <motion.p
          className="finale-message"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.6,
            duration: 1,
          }}
        >
          No matter how many roles you have played,
          <br />
          no matter how many lives you have touched...
          <br />
          I'll always be your little girl.
        </motion.p>

        <motion.div
          className="finale-heart"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 3.2,
            type: "spring",
            stiffness: 180,
          }}
        >
          ❤️
        </motion.div>

        <motion.p
          className="finale-signature"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.65,
          }}
          transition={{
            delay: 3.8,
          }}
        >
        </motion.p>

      </motion.div>

      <div className="finale-sparkle sparkle-one">
        ✦
      </div>

      <div className="finale-sparkle sparkle-two">
        ✧
      </div>

      <div className="finale-sparkle sparkle-three">
        ✦
      </div>

      <div className="finale-sparkle sparkle-four">
        ✧
      </div>

    </motion.section>
  );
}

export default App;