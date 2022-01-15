import { boolean } from "yup/lib/locale";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Heading {
  firstname: string;
  lastname: string;
  profession: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  github: string;
  linkdin: string;
}

interface Work {
  id: number,
  jobTitle: string,
  employer: string,
  startDate: string,
  city: string,
  state: string,
  endDate: string,
  currentWork: boolean,
  desc: string[]
}

interface Skill {
  id: number,
  name: string,
  rating: number
}

interface Education {
  name: string,
  location: string,
  degree: string,
  field: string,
  startDate: string,
  endDate: string,
  desc: string[]
}

interface UserStore {
  heading: Heading;
  setHeading: (heading: Heading) => void;
  work: Work[];
  setWork: (work: Work) => void;
  removeWork: (id: number) => void;
  education: Education;
  setEducation: (education: Education) => void;
  skill: Skill[];
  setSkill: (skill: Skill) => void;
  removeSkill: (id: number) => void;
}

interface StepStore {
  step: number;
  setStep: (step: number) => void;
}

export const userStore = create<UserStore>(
  devtools(
    persist(
      (set) => ({
        heading: {
          firstname: '',
          lastname: '',
          profession: '',
          city: '',
          state: '',
          pincode: '',
          phone: '',
          email: '',
          github: '',
          linkdin: ''
        } as Heading,
        setHeading: (heading: Heading) => {
          set((oldState: UserStore) => ({
            heading: heading
          }));
        },

        work: [] as Work[],
        setWork: (work: Work) => {
          set((oldState: UserStore) => (
            oldState.work = oldState.work.filter((e: Work) => {
              return e.id !== work.id
            }),
            {
              work: [
                ...oldState.work,
                work
              ]
            }
          ));
        },
        removeWork: (id: number) => {
          set((oldState: UserStore) => (
            oldState.work = oldState.work.filter((e: Work) => {
              return e.id !== id
            }),
            {}
          ));
        },

        education: {
          name: '',
          location: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          desc: []
        } as Education,
        setEducation: (education: Education) => {
          set((oldState: UserStore) => ({
            education: education
          }));
        },

        skill: [{ id: 0, name: '', rating: 0 }] as Skill[],
        setSkill: (skill: Skill) => {
          set((oldState: UserStore) => (
            oldState.skill = oldState.skill.filter((e: Skill) => {
              return e.id !== skill.id
            }),
            {
              skill: [
                ...oldState.skill,
                skill
              ]
            }
          ));
        },
        removeSkill: (id: number) => {
          set((oldState: UserStore) => (
            oldState.skill = oldState.skill.filter((e: Skill) => {
              return e.id !== id
            }),
            {}
          ));
        },

      }),
      { name: "user-store" }
    )
  )
);

export const stepStore = create<StepStore>(
  devtools(
    (set) => ({
      step: -1,
      setStep: (step: number) => {
        set((oldState: StepStore) => ({
          step: step
        }))
      }
    })
  )
)