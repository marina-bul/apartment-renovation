import 'app/styles/index.scss'
import { StoryFn, StoryContext } from '@storybook/react';

export const ThemeDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
  <div className={`app ${context.globals.theme}`} style={{padding: "80px 160px", minHeight: "auto"}}>
    <StoryComponent />
  </div>
);
