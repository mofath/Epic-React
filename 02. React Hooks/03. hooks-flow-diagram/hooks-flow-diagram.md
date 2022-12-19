# The Lifecycle of React Hooks Component

Every component has three phases:

- Mount
- Update
- Unmount

![React Hook Form Diagaram](../../assets/hook-flow.png)

---

## Mount - Hooks Flow

This stage is when the component initially mounts on a page. In this stage, the flow of hooks is as follows:

1. **Run lazy initializers**
2. **Render**: This is where all the useState hooks and other things are present.
3. **React updates DOM**: Updating of DOM is not same as the browser painting the screen.
4. **Browser paints the screen**
5. **Run Effects**

---

## Update - Hooks Flow

This stage is when the component updates.

An update can happen for all the following reasons:

- Parent re-render
- State update
- Context update
  
In this stage, the flow of hooks is as follows:

- **Render**
- **React updates DOM**
- **Cleanup Layout Effects**: (i.e. useEffect,  useLayoutEffect)
- **Run Layout Effects**
- **Browser paints the screen**
- **Cleanup Effects**
- **Run Effects**

Similar to what we saw for the mount stage, except that this also has Cleanup Layout Effects and Cleanup Effects.

---

## Unmount - Hooks Flow

This stage is when the component unmounts from a page.

In this stage, the flow of hooks is as follows:

- **Cleanup Layout Effects**
- **Cleanup Effects**

Only cleanups will be run in this stage.
