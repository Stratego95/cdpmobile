/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGymnasticElement = /* GraphQL */ `
  subscription OnCreateGymnasticElement {
    onCreateGymnasticElement {
      id
      identifier
      description
      group
      difficulty
      apparatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGymnasticElement = /* GraphQL */ `
  subscription OnUpdateGymnasticElement {
    onUpdateGymnasticElement {
      id
      identifier
      description
      group
      difficulty
      apparatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGymnasticElement = /* GraphQL */ `
  subscription OnDeleteGymnasticElement {
    onDeleteGymnasticElement {
      id
      identifier
      description
      group
      difficulty
      apparatus
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTrainer = /* GraphQL */ `
  subscription OnCreateTrainer {
    onCreateTrainer {
      id
      name
      gymnasts {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTrainer = /* GraphQL */ `
  subscription OnUpdateTrainer {
    onUpdateTrainer {
      id
      name
      gymnasts {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTrainer = /* GraphQL */ `
  subscription OnDeleteTrainer {
    onDeleteTrainer {
      id
      name
      gymnasts {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGymnast = /* GraphQL */ `
  subscription OnCreateGymnast {
    onCreateGymnast {
      id
      name
      trainer {
        id
        name
        gymnasts {
          nextToken
        }
        createdAt
        updatedAt
      }
      apparatus {
        items {
          id
          name
          elements
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGymnast = /* GraphQL */ `
  subscription OnUpdateGymnast {
    onUpdateGymnast {
      id
      name
      trainer {
        id
        name
        gymnasts {
          nextToken
        }
        createdAt
        updatedAt
      }
      apparatus {
        items {
          id
          name
          elements
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGymnast = /* GraphQL */ `
  subscription OnDeleteGymnast {
    onDeleteGymnast {
      id
      name
      trainer {
        id
        name
        gymnasts {
          nextToken
        }
        createdAt
        updatedAt
      }
      apparatus {
        items {
          id
          name
          elements
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateApparatus = /* GraphQL */ `
  subscription OnCreateApparatus {
    onCreateApparatus {
      id
      name
      gymnast {
        id
        name
        trainer {
          id
          name
          createdAt
          updatedAt
        }
        apparatus {
          nextToken
        }
        createdAt
        updatedAt
      }
      elements
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateApparatus = /* GraphQL */ `
  subscription OnUpdateApparatus {
    onUpdateApparatus {
      id
      name
      gymnast {
        id
        name
        trainer {
          id
          name
          createdAt
          updatedAt
        }
        apparatus {
          nextToken
        }
        createdAt
        updatedAt
      }
      elements
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteApparatus = /* GraphQL */ `
  subscription OnDeleteApparatus {
    onDeleteApparatus {
      id
      name
      gymnast {
        id
        name
        trainer {
          id
          name
          createdAt
          updatedAt
        }
        apparatus {
          nextToken
        }
        createdAt
        updatedAt
      }
      elements
      createdAt
      updatedAt
    }
  }
`;
