// status
export const state = {
  page: 0,
  questions: [
    {
      q: "Are you a extrobert?",
      a: [
        {
          text: "yes",
          value: "e",
        },
        {
          text: "no",
          value: "i",
        },
      ],
    },
    {
      q: "Are you a sensitive?",
      a: [
        {
          text: "yes",
          value: "s",
        },
        {
          text: "no",
          value: "n",
        },
      ],
    },
    {
      q: "Are you a sense of feeling?",
      a: [
        {
          text: "yes",
          value: "f",
        },
        {
          text: "no",
          value: "t",
        },
      ],
    },
    {
      q: "Are you a planning?",
      a: [
        {
          text: "yes",
          value: "j",
        },
        {
          text: "no",
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
