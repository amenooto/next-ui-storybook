'use client';
import { CAccordionStories } from '@/components/c-accordion/accordion.stories';
import { CAutocompleteStories } from '@/components/c-autocomplete/autocomplete.stories';
import { animals } from '@/common/data/demo.data';
import { CAvatarStories } from '@/components/c-avatar/avatar.stories'; // Check the import path

export default function Home() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <CAccordionStories
          items={[
            {
              title: 'Item 1',
              description: defaultContent,
            },
            {
              title: 'Item 2',
              description: defaultContent,
            },
            {
              title: 'Item 3',
              description: defaultContent,
            },
          ]}
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <CAutocompleteStories
          placeholder={'Placeholder'}
          label={'Label'}
          options={animals}
          color="warning"
        />
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <CAvatarStories mode={'name'} value={'LEEHYEONHO'} />
      </div>
    </section>
  );
}
