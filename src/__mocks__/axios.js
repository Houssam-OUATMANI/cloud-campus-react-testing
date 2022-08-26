const response = {data: [{ id: 1, name: "john", username: "doe" }]};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(response),
};
