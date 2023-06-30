// status
export const state = {
  page: 0,
  questions: [
    // first question
    {
      q: "What is your favorite character type in One Piece?",
      a: [
        {
          text: "People who have a free spirit and enjoy adventure",
          value: "e",
        },
        {
          text: "People who are realistic and prioritize practical situations",
          value: "i",
        },
      ],
    },
    {
      q: "What moments in the world of One Piece impress you the most?",
      a: [
        {
          text: "Moments of powerful imagination and an ideal world",
          value: "n",
        },
        {
          text: "Moments of actual events and the real world ",
          value: "s",
        },
      ],
    },
    {
      q: "What character traits in One Piece do you pay the most attention to?",
      a: [
        {
          text: "Logical and objective thinking",
          value: "t",
        },
        {
          text: "Emotions and focus on relationships",
          value: "f",
        },
      ],
    },
    {
      q: "What type of ending in the world of One Piece do you prefer?",
      a: [
        {
          text: "People who pursue new adventures and the unknown",
          value: "p",
        },
        {
          text: "People who prefer achieving goals and organized endings",
          value: "j",
        },
      ],
    },
    // second question
    {
      q: "Which character from One Piece do you find most relatable?",
      a: [
        {
          text: "The character who actively helps and collaborates with others ",
          value: "e",
        },
        {
          text: " The character who strives alone for personal goals",
          value: "i",
        },
      ],
    },
    {
      q: "Which aspect of One Piece's world captivates you the most?",
      a: [
        {
          text: "The beauty of natural landscapes and real-world locations ",
          value: "s",
        },
        {
          text: "The fantastical world and imaginary places",
          value: "n",
        },
      ],
    },
    {
      q: "Which character decision-making process in One Piece resonates with you?",
      a: [
        {
          text: "Emotion-based and sensory decision-making",
          value: "f",
        },
        {
          text: "Logical and analytical decision-making",
          value: "t",
        },
      ],
    },
    {
      q: "What adventure style in the world of One Piece do you prefer?",
      a: [
        {
          text: "Planning and preparing adventures methodically",
          value: "j",
        },
        {
          text: "Adapting flexibly to situations and seeking new experiences",
          value: "p",
        },
      ],
    },
    // third question
    {
      q: "While watching One Piece, which character behavior do you resonate with the most?",
      a: [
        {
          text: "The act of helping others and collaborating",
          value: "e",
        },
        {
          text: "The effort made by an individual towards personal goals ",
          value: "i",
        },
      ],
    },
    {
      q: "What is your favorite location in One Piece?",
      a: [
        {
          text: "Beautiful natural landscapes and real-world locations",
          value: "s",
        },
        {
          text: "Fantastic world and imaginary places",
          value: "n",
        },
      ],
    },
    {
      q: "Which character decision-making process in One Piece impresses you the most?",
      a: [
        {
          text: "Decisions based on emotions and senses",
          value: "f",
        },
        {
          text: "Decisions based on logic and analysis ",
          value: "t",
        },
      ],
    },
    {
      q: "How do you approach planning for adventures in the world of One Piece?",
      a: [
        {
          text: "I prefer going with the flow and embracing the spontaneity of the journey",
          value: "j",
        },
        {
          text: "I enjoy meticulously researching and strategizing for every aspect of the adventure",
          value: "p",
        },
      ],
    },
  ],
  result: {
    e: 0,
    i: 0,
    s: 0,
    n: 0,
    t: 0,
    f: 0,
    p: 0,
    j: 0,
  },
};

// commit, change state
export const mutations = {
  SET_USER_TYPE(state, type) {
    state.result[type] += 1;
    state.page += 1;
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  PAGE_RESET(state) {
    state.page = 0;
    state.result = {
      e: 0,
      i: 0,
      s: 0,
      n: 0,
      t: 0,
      f: 0,
      p: 0,
      j: 0,
    };
  },
};

// action
export const actions = {
  // context
  clickButton({ commit }, type) {
    commit("SET_USER_TYPE", type);
  },
  clickResetButton({ commit }, type) {
    commit("PAGE_RESET");
  },
};
