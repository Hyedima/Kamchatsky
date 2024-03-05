const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      }
    },
      {
        id: 2,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },      
    },
    {
        id: 3,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },      
    }
    // More posts...
  ]



  const payload = {
    "data": [
        {
            "class": 0,
            "confidence": 0.6937205195426941,
            "name": "fish",
            "segment": [
                0.4390625059604645,
                0.6583333611488342,
                0.4375,
                0.6604166626930237,
                0.4375,
                0.7999999523162842,
                0.4390625059604645,
                0.8020833134651184,
                0.4390625059604645,
                0.8125,
                0.4593749940395355,
                0.8125,
                0.4609375,
                0.8104166388511658,
                0.4625000059604645,
                0.8104166388511658,
                0.46406248211860657,
                0.8083333373069763,
                0.46406248211860657,
                0.8062499761581421,
                0.46562501788139343,
                0.8041666746139526,
                0.46562501788139343,
                0.8020833134651184,
                0.4671874940395355,
                0.7999999523162842,
                0.4671874940395355,
                0.7895833253860474,
                0.46875,
                0.7875000238418579,
                0.46875,
                0.6770833134651184,
                0.4671874940395355,
                0.6749999523162842,
                0.4671874940395355,
                0.6625000238418579,
                0.46562501788139343,
                0.6604166626930237,
                0.4625000059604645,
                0.6604166626930237,
                0.4609375,
                0.6583333611488342
            ]
        },
        {
            "class": 0,
            "confidence": 0.6514299511909485,
            "name": "fish",
            "segment": [
                0.5390625,
                0.6416666507720947,
                0.5374999642372131,
                0.6437499523162842,
                0.535937488079071,
                0.6437499523162842,
                0.534375011920929,
                0.6458333134651184,
                0.534375011920929,
                0.6583333611488342,
                0.5328125357627869,
                0.6604166626930237,
                0.5328125357627869,
                0.6791666746139526,
                0.53125,
                0.6812499761581421,
                0.53125,
                0.7708333134651184,
                0.5328125357627869,
                0.7729166746139526,
                0.542187511920929,
                0.7729166746139526,
                0.543749988079071,
                0.7708333134651184,
                0.546875,
                0.7708333134651184,
                0.550000011920929,
                0.7666666507720947,
                0.550000011920929,
                0.7604166865348816,
                0.5546875,
                0.7541666626930237,
                0.5546875,
                0.7520833611488342,
                0.5562500357627869,
                0.75,
                0.5562500357627869,
                0.7479166388511658,
                0.557812511920929,
                0.7458333373069763,
                0.557812511920929,
                0.7395833134651184,
                0.559374988079071,
                0.7374999523162842,
                0.559374988079071,
                0.7104166746139526,
                0.5609374642372131,
                0.7083333134651184,
                0.5609374642372131,
                0.6687500476837158,
                0.5625,
                0.6666666865348816,
                0.5625,
                0.6437499523162842,
                0.5609374642372131,
                0.6437499523162842,
                0.559374988079071,
                0.6416666507720947
            ]
        },
        {
            "class": 0,
            "confidence": 0.5764812231063843,
            "name": "fish",
            "segment": [
                0.503125011920929,
                0.6333333253860474,
                0.5,
                0.6375000476837158,
                0.5,
                0.7333333492279053,
                0.5015625357627869,
                0.7354166507720947,
                0.5015625357627869,
                0.7374999523162842,
                0.5062499642372131,
                0.7374999523162842,
                0.5078125,
                0.7395833134651184,
                0.5093750357627869,
                0.7395833134651184,
                0.510937511920929,
                0.7374999523162842,
                0.515625,
                0.7374999523162842,
                0.518750011920929,
                0.7333333492279053,
                0.518750011920929,
                0.7312500476837158,
                0.520312488079071,
                0.7291666865348816,
                0.520312488079071,
                0.7229166626930237,
                0.5218749642372131,
                0.7208333611488342,
                0.5218749642372131,
                0.7083333134651184,
                0.5234375,
                0.7062499523162842,
                0.5234375,
                0.6708333492279053,
                0.5250000357627869,
                0.6687500476837158,
                0.5250000357627869,
                0.6583333611488342,
                0.526562511920929,
                0.65625,
                0.526562511920929,
                0.6520833373069763,
                0.528124988079071,
                0.6499999761581421,
                0.528124988079071,
                0.6354166865348816,
                0.526562511920929,
                0.6354166865348816,
                0.5250000357627869,
                0.6333333253860474
            ]
        },
        {
            "class": 0,
            "confidence": 0.5007957220077515,
            "name": "fish",
            "segment": [
                0.526562511920929,
                0.75,
                0.5250000357627869,
                0.7520833611488342,
                0.5234375,
                0.7520833611488342,
                0.5218749642372131,
                0.7541666626930237,
                0.5218749642372131,
                0.7562500238418579,
                0.520312488079071,
                0.7583333253860474,
                0.520312488079071,
                0.7729166746139526,
                0.518750011920929,
                0.7749999761581421,
                0.518750011920929,
                0.8500000238418579,
                0.520312488079071,
                0.8520833253860474,
                0.520312488079071,
                0.8666666150093079,
                0.518750011920929,
                0.8687499761581421,
                0.518750011920929,
                0.8937499523162842,
                0.5218749642372131,
                0.8979166150093079,
                0.5234375,
                0.8958333134651184,
                0.5406250357627869,
                0.8958333134651184,
                0.542187511920929,
                0.8937499523162842,
                0.542187511920929,
                0.856249988079071,
                0.543749988079071,
                0.8541666865348816,
                0.543749988079071,
                0.8374999761581421,
                0.5453124642372131,
                0.8354166746139526,
                0.5453124642372131,
                0.8229166865348816,
                0.546875,
                0.8208333253860474,
                0.546875,
                0.8062499761581421,
                0.5484375357627869,
                0.8041666746139526,
                0.5484375357627869,
                0.7895833253860474,
                0.550000011920929,
                0.7875000238418579,
                0.550000011920929,
                0.7604166865348816,
                0.551562488079071,
                0.7583333253860474,
                0.551562488079071,
                0.7562500238418579,
                0.5531249642372131,
                0.7541666626930237,
                0.551562488079071,
                0.7520833611488342,
                0.543749988079071,
                0.7520833611488342,
                0.542187511920929,
                0.75
            ]
        },
        {
            "class": 0,
            "confidence": 0.46825119853019714,
            "name": "fish",
            "segment": [
                0.5765624642372131,
                0.5833333134651184,
                0.574999988079071,
                0.5854166746139526,
                0.574999988079071,
                0.6895833611488342,
                0.5765624642372131,
                0.6916666626930237,
                0.5765624642372131,
                0.6958333253860474,
                0.5875000357627869,
                0.6958333253860474,
                0.589062511920929,
                0.6937500238418579,
                0.5921874642372131,
                0.6937500238418579,
                0.598437488079071,
                0.6854166388511658,
                0.598437488079071,
                0.6833333373069763,
                0.606249988079071,
                0.6729166507720947,
                0.6078124642372131,
                0.6729166507720947,
                0.609375,
                0.6708333492279053,
                0.6109375357627869,
                0.6708333492279053,
                0.614062488079071,
                0.6666666865348816,
                0.6156249642372131,
                0.6666666865348816,
                0.620312511920929,
                0.6604166626930237,
                0.620312511920929,
                0.6583333611488342,
                0.621874988079071,
                0.65625,
                0.621874988079071,
                0.6541666388511658,
                0.6234374642372131,
                0.6520833373069763,
                0.6234374642372131,
                0.6499999761581421,
                0.625,
                0.6479166746139526,
                0.625,
                0.6458333134651184,
                0.6265625357627869,
                0.6437499523162842,
                0.6265625357627869,
                0.5874999761581421,
                0.625,
                0.5874999761581421,
                0.6234374642372131,
                0.5854166746139526,
                0.6187500357627869,
                0.5854166746139526,
                0.6171875,
                0.5833333134651184
            ]
        },
        {
            "class": 0,
            "confidence": 0.37959152460098267,
            "name": "fish",
            "segment": [
                0.5703125,
                0.7333333492279053,
                0.5687499642372131,
                0.7354166507720947,
                0.5687499642372131,
                0.7437499761581421,
                0.5703125,
                0.7458333373069763,
                0.5703125,
                0.7687499523162842,
                0.5687499642372131,
                0.7708333134651184,
                0.5687499642372131,
                0.84375,
                0.5718750357627869,
                0.8479166626930237,
                0.589062511920929,
                0.8479166626930237,
                0.590624988079071,
                0.8458333015441895,
                0.6031250357627869,
                0.8458333015441895,
                0.604687511920929,
                0.84375,
                0.612500011920929,
                0.84375,
                0.614062488079071,
                0.8416666388511658,
                0.6187500357627869,
                0.8416666388511658,
                0.620312511920929,
                0.84375,
                0.620312511920929,
                0.8312499523162842,
                0.621874988079071,
                0.8291666507720947,
                0.621874988079071,
                0.8041666746139526,
                0.6234374642372131,
                0.8020833134651184,
                0.6234374642372131,
                0.7374999523162842,
                0.620312511920929,
                0.7333333492279053
            ]
        }
    ],
    "message": "Inference complete.",
    "success": true
}
  
import { useState, useEffect } from 'react';



  export default function DataPage() {

    const [result, setResult] = useState<[]>([]);

    useEffect(() => {
      const api = async () => {
        const data = await fetch("https://api.ultralytics.com/v1/predict/JuCvPyaYK5IqQKiBF96U", {
          method: "GET"
        });
        const jsonData = await data.json();
        setResult(jsonData.results);
      };
  
      api();
    }, []);

    //console.log(">>>>>>>>>>"+result);
    //console.log(">>>>>>>>>>"+payload.data[0].confidence);
    return (
      <div className="bg-white py-4 sm:py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div> */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <article key={'1'} className="flex max-w-xl flex-col items-start justify-between  bg-pink-500 rounded pl-5 pt-5 pr-5 pb-5">
                {/* <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={'abc'} className="text-gray-500">
                    {''}
                  </time>
                  <a
                    href={""}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {"Data Format"}
                  </a>
                </div> */}
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-600">
                    <a href={""}>
                      <span className="absolute inset-0" />
                      {"Data Format"}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-24  text-sm w-96 leading-6 bg-yellow-950 text-gray-100 pl-5 pt-5 pr-5 pb-5">
                  <code>
                    {'[ { '}<br/> 
                    {' “filename”: “…”,'}<br/> 
                    {'“id”: “…”,' }<br/> 
                    {'“bbox”: […], '}<br/> 
                    {'“conf”: … '}<br/> 
                    {'   },'}<br/> 
                    {' {…} ]'}<br/> 
                    
                    {/* {`html { background: red; }`}<br/>
                    {`body { color: blue; }`}<br/> */}
                    </code>
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-100">
                      <a href={"post.author.href"}>
                        <span className="absolute inset-0" />
                        {'post.author.name'}
                      </a>
                    </p>
                    <p className="text-gray-600">{'post.author.role'}</p>
                  </div>
                </div>
              </article>
           
              <article key={'1'} className="flex max-w-xl flex-col items-start justify-between  bg-blue-700 rounded pl-5 pt-5 pr-5 pb-5">
                {/* <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={'abc'} className="text-gray-500">
                    {'terer'}
                  </time>
                  <a
                    href={""}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {"Data Format "}
                  </a>
                </div> */}
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-600">
                    <a href={""}>
                      <span className="absolute inset-0" />
                      {"Result"}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 bg-yellow-500 text-gray-100 pl-5 pt-5 pr-5 pb-5">
                  {/* {
                  result.map((fish)=>(
                    
                  )
                  )
                  } */}
                  <h5 key={'dd'}>
                        {
                           "Confidence: "+ payload.data[0].confidence
                        }
                    </h5>
                    <h5>
                    {"Total: "+ payload.data.length }
                    </h5>
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-100">
                      <a href={"post.author.href"}>
                        <span className="absolute inset-0" />
                        {'Some text here'}
                      </a>
                    </p>
                    <p className="text-gray-600">{'more text'}</p>
                  </div>
                </div>
              </article>
           
{/*            
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between  bg-green-900 rounded pl-5 pt-5 pr-5 pb-5">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))} */}
          </div>
        </div>
      </div>
    )
  }
  