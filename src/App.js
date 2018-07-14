import React, {Component} from 'react'
import logo from './logo.svg'
// import './App.css';

function uniqueRandom(randomFn) {
  let takenNumber = []
  let taken = number => takenNumber.includes(number)

  return function inner() {
    let randomNumber = randomFn()
    console.log(takenNumber)
    console.log(randomNumber)
    if (!taken(randomNumber)) {
      takenNumber.push(randomNumber)
      return randomNumber
    }


    return inner()
    // let secondRandomNumber = randomFn()

    // takenNumber.push(secondRandomNumber)
    // return secondRandomNumber
  }
}

class App extends Component {
  state = {
    data: [
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Smart watch',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Wireless headphones',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'TV',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      },
      {
        title: 'Kamera Mirrorless',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        image: 'https://tailwindcss.com/img/card-top.jpg',
        winner: 1000
      }
    ]
  }

  getWinner = () => {
    this.setState(({data}) => {
      const randomFn = () => Math.floor(Math.random() * (26 - 1) + 1)
      const randomNumber = uniqueRandom(randomFn)
      return {
        data: data.map(item => {
          return {...item, winner: randomNumber()}
        })
      }
    })
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="bg-white my-8 mx-8 py-4 shadow-lg rounded-lg h-auto">
          <h2 className="-mb-3 px-4 mb-5 ml-4 text-grey-darkest w-auto inline-block">
            Undian berhadiah stage 1
          </h2>
          <div className="inline-block">
            <button
              className="bg-indigo-dark hover:bg-indigo text-white font-bold py-2 px-4 rounded"
              onClick={this.getWinner}
            >
              Acak Undian
            </button>
          </div>
          {/* <div className="border-b border-black px-0" /> */}
          <div className="flex flex-wrap justify-between item-center content-center py-4 px-4 ">
            {this.state.data.map(data => {
              return (
                <div className="max-w-sm w-1/5 rounded overflow-hidden shadow-lg mx-4 mb-4">
                  <div className="flex flex-col content-end">
                    <img
                      className="w-auto"
                      src={data.image}
                      alt="Sunset in the mountains"
                    />

                    <div className="px-6 py-3 h-32">
                      <div className="font-bold tracking-wide text-xl">
                        {data.title}
                      </div>
                      <p className="text-grey-darker text-base leading-normal">
                        {data.description}
                      </p>
                    </div>

                    <div className="px-6 py-4 flex-grow">
                      <div className="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                        {data.winner}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* <div className="flex item-center content-center py-4 px-4">
            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-3">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Kamera Mirrorles
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>

            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Smart watch
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>

            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2 tracking-wide">
                  Wireless headphones
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>

            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Smart watch
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>
          </div>

          <div className="flex item-center content-center py-4 px-4">
            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Smart watch
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>

            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Smart watch
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>

            <div class="max-w-sm w-1/4 rounded overflow-hidden shadow-lg mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Smart watch
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>

            <div class="max-w-sm w-1/4 mx-4">
              <img
                class="w-auto"
                src="https://tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold tracking-wide text-xl mb-2">
                  Smart watch
                </div>
                <p class="text-grey-darker text-base leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div class="px-6 py-4">
                <div class="bg-indigo-dark rounded px-3 py-2 text-sm font-semibold text-white mr-2 text-center">
                  10000
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default App
