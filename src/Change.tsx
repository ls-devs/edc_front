import { FetchUser, Inputs, User } from "../types/types";
import { ChangeEvent, useRef, useState } from "react";

export const Change = () => {
  const [user, setUser] = useState<User[]>();
  const [hasAdh, setHasAdh] = useState<boolean>(false);
  const idRef = useRef<HTMLInputElement>(null);

  const loginRef = useRef<HTMLInputElement[]>([]);
  const addToLoginRef = (el: HTMLInputElement) => {
    if (!loginRef.current.includes(el)) loginRef.current.push(el);
  };
  const onLoginChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_login: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const passRef = useRef<HTMLInputElement[]>([]);
  const addToPassRef = (el: HTMLInputElement) => {
    if (!passRef.current.includes(el)) passRef.current.push(el);
  };
  const onPassChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_pass: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const nomRef = useRef<HTMLInputElement[]>([]);
  const addToNomRef = (el: HTMLInputElement) => {
    if (!nomRef.current.includes(el)) nomRef.current.push(el);
  };
  const onNomChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_nicename: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const mailRef = useRef<HTMLInputElement[]>([]);
  const addToMailRef = (el: HTMLInputElement) => {
    if (!mailRef.current.includes(el)) mailRef.current.push(el);
  };
  const onMailChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_email: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const urlRef = useRef<HTMLInputElement[]>([]);
  const addToUrlRef = (el: HTMLInputElement) => {
    if (!urlRef.current.includes(el)) urlRef.current.push(el);
  };
  const onUrlChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_url: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const keyRef = useRef<HTMLInputElement[]>([]);
  const addToKeyRef = (el: HTMLInputElement) => {
    if (!keyRef.current.includes(el)) keyRef.current.push(el);
  };
  const onKeyChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_activation_key: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const statusRef = useRef<HTMLInputElement[]>([]);
  const addToStatusRef = (el: HTMLInputElement) => {
    if (!statusRef.current.includes(el)) statusRef.current.push(el);
  };
  const onStatusChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              user_status: el.target.value as unknown as number,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const displayRef = useRef<HTMLInputElement[]>([]);
  const addToDisplayRef = (el: HTMLInputElement) => {
    if (!displayRef.current.includes(el)) displayRef.current.push(el);
  };
  const onDisplayChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              display_name: el.target.value,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const proRef = useRef<HTMLInputElement[]>([]);
  const addToProRef = (el: HTMLInputElement) => {
    if (!proRef.current.includes(el)) proRef.current.push(el);
  };
  const onProChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              pro: el.target.checked,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const partenaireRef = useRef<HTMLInputElement[]>([]);
  const addToPartenaireRef = (el: HTMLInputElement) => {
    if (!partenaireRef.current.includes(el)) partenaireRef.current.push(el);
  };
  const onPartenaireChange = (el: ChangeEvent<HTMLInputElement>) => {
    user?.map(() => {
      setUser(
        [...user].map((obj) => {
          if (obj.ID === el.target.name) {
            return {
              ...obj,
              partenaire: el.target.checked,
            };
          } else {
            return obj;
          }
        }),
      );
    });
  };

  const getUser = async () => {
    const req = await fetch("http://localhost:3000/users/id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_login: idRef.current?.value,
      }),
    });

    const res: FetchUser = await req.json();
    if (!res.Message) {
      setUser(res.User);
      setHasAdh(true);
    }
  };

  const changeUser = async (data: User) => {
    user?.forEach(async (user) => {
      if (data.ID === user.ID) {
        console.log(data);
        const req = await fetch("http://localhost:3000/users", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
          }),
        });

        const res = await req.json();
        console.log(res);
      }
    });
  };

  return (
    <>
      <div className="flex w-auto flex-col items-center justify-center py-28">
        <div className="relative mb-4 flex w-1/2">
          <label htmlFor="ID" className="w-[155px] text-lg font-semibold">
            ID*
          </label>
          <input
            type="number"
            className="ml-2 w-full border-2 border-gray-200"
            ref={idRef}
          />
        </div>
        <button
          onClick={() => getUser()}
          className="mt-8 bg-red-edc px-8 py-2 text-white"
        >
          Rechercher
        </button>
      </div>
      {hasAdh &&
        user?.map((user) => {
          return (
            <div
              key={user.ID}
              className="flex w-auto flex-col items-center justify-center py-28"
            >
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="LOGIN"
                  className="w-[155px] text-lg font-semibold"
                >
                  LOGIN*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_login}
                  ref={(el) => {
                    if (el) addToLoginRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onLoginChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="PASS"
                  className="w-[155px] text-lg font-semibold"
                >
                  PASS*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_pass}
                  ref={(el) => {
                    if (el) addToPassRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onPassChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="NOM"
                  className="w-[155px] text-lg font-semibold"
                >
                  NOM*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_nicename}
                  ref={(el) => {
                    if (el) addToNomRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onNomChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="EMAIL"
                  className="w-[155px] text-lg font-semibold"
                >
                  EMAIL*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_email}
                  ref={(el) => {
                    if (el) addToMailRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onMailChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="URL"
                  className="w-[155px] text-lg font-semibold"
                >
                  URL*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_url}
                  ref={(el) => {
                    if (el) addToUrlRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onUrlChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="KEY"
                  className="w-[155px] text-lg font-semibold"
                >
                  KEY*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_activation_key}
                  ref={(el) => {
                    if (el) addToKeyRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onKeyChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="STATUS"
                  className="w-[155px] text-lg font-semibold"
                >
                  STATUS*
                </label>
                <input
                  type="number"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.user_status}
                  ref={(el) => {
                    if (el) addToStatusRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onStatusChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="DISPLAY NAME"
                  className="w-[155px] text-lg font-semibold"
                >
                  DISPLAY NAME*
                </label>
                <input
                  type="text"
                  className="ml-2 w-full border-2 border-gray-200"
                  value={user?.display_name}
                  ref={(el) => {
                    if (el) addToDisplayRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onDisplayChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="PRO"
                  className="w-[155px] text-lg font-semibold"
                >
                  PRO*
                </label>
                <input
                  type="checkbox"
                  className="ml-2 w-full"
                  checked={user.pro}
                  ref={(el) => {
                    if (el) addToProRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onProChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <div className="relative mb-4 flex w-1/2">
                <label
                  htmlFor="PARTENAIRE"
                  className="w-[155px] text-lg font-semibold"
                >
                  PARTENAIRE*
                </label>
                <input
                  type="checkbox"
                  className="ml-2 block w-full border-2 border-gray-200"
                  checked={user.partenaire}
                  ref={(el) => {
                    if (el) addToPartenaireRef(el);
                  }}
                  onChange={(el) => {
                    if (el) onPartenaireChange(el);
                  }}
                  name={user.ID}
                />
              </div>
              <button
                name={user.ID}
                className="mt-8 bg-red-edc px-8 py-2 text-white"
                onClick={() => changeUser(user)}
              >
                Modifier l'adhérent
              </button>
            </div>
          );
        })}
    </>
  );
};
