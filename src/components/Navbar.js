import PropTypes from 'prop-types';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'All Projects', href: '#', value: 'title', current: true },
  { name: 'Angular', href: '#', value: 'angular', current: false },
  { name: 'React', href: '#', value: 'react', current: false },
  { name: 'Vue', href: '#', value: 'vue', current: false },
  { name: 'Events', value: 'olympics', href: '#', current: false },
  { name: 'Film', value: 'australia-film', href: '#', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ value, onNavChange }) {
  navigation.forEach((item) => {
    if (item.value === value) {
      item.current = true;
    } else {
      item.current = false;
    }
  });
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto rounded-full"
                    src="./images/matt.jpg"
                    alt="Matt"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto rounded-full"
                    src="./images/matt.jpg"
                    alt="Matt"
                  />
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => onNavChange(item.value)}
                        className={classNames(
                          item.current ? 'text-gray-900 ' : 'text-gray-400 hover:text-gray-600',
                          'px-2 py-1 font-medium'
                        )}>
                        {item.name}
                      </button>
                      // <a
                      //   key={item.name}
                      //   href={item.href}
                      //   className={classNames(
                      //     item.current ? 'text-gray-900 ' : 'text-gray-400 hover:text-gray-600',
                      //     'px-2 py-1 text-sm font-medium'
                      //   )}
                      //   aria-current={item.current ? 'page' : undefined}
                      // >
                      //   {item.name}
                      // </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <a href="https://linkedin.com/in/matthewbeardsley">
                  <img
                    className="w-6 mr-4"
                    src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/beardsleym">
                  <img
                    className="w-6"
                    src="https://cdn.worldvectorlogo.com/logos/github-icon.svg"
                    alt=""
                  />
                </a>
                <Menu as="div" className="ml-3 relative">
                  {() => (
                    <>
                      <div>
                        {/* <Menu.Button className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"> */}
                        <span className="sr-only">Open user menu</span>
                        {/* </Menu.Button> */}
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}>
                                Your Profile
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}>
                                Settings
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}>
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

Example.propTypes = {
  value: PropTypes.string.isRequired,
  onNavChange: PropTypes.func.isRequired
};
