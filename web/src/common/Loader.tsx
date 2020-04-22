import React, {useRef} from 'react'


export const Loader = () => {
  const codeSnippet = codeSnippets[Math.floor(Math.random() * 3)]

  const ref = useRef<HTMLDivElement>(null);

  let cursor = 0;
  const interval = setInterval(() => {
    ref.current && (ref.current.innerText += (codeSnippet.substring(cursor, cursor += 20)))
    if(cursor + 20 > codeSnippet.length)
      clearInterval(interval)
  }, 50)

  return (<div ref={ref} className={'loader content-size'}/>)
}

const codeSnippets = [
  'ComponentArea::ComponentArea(QWidget* parent) : QWidget(parent)\n{\n    QPalette palette = this->palette();\n' +
  '    palette.setColor(QPalette::Window, Qt::white);\n    setPalette(palette);\n    tmpDir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);\n\n    simulationTimer->setSingleShot(false);\n    simulationTimer->setInterval(simulationTimer_Interval);\n    connect(simulationTimer, SIGNAL(timeout()), this, SLOT(updateEveryBlock()));\n\n    clipboard = QApplication::clipboard();\n    connect(clipboard, SIGNAL(dataChanged()), this, SLOT(updatePasteContextMenuFromClipboardChange()));\n\n}',
  'const fetchPosts: () => Promise<IBlogPost[]> = () => {\n  return' +
  ' axios.get<string>(\'https://us-central1-landing-page-245120.cloudfunctions.net/blogFeed\')\n    .then(feed =>' +
  ' new DOMParser().parseFromString(feed.data, \'text/xml\'))\n    .then(xml => xml.getElementsByTagName(\'channel\')[0].getElementsByTagName(\'item\'))\n    .then(items => Array.from(items))\n    .then(items => items.map(item => ({\n      key: item.getElementsByTagName(\'guid\')[0].textContent as string,\n      title: item.getElementsByTagName(\'title\')[0].textContent,\n      date: new Date(Date.parse(item.getElementsByTagName(\'atom:updated\')[0].textContent as string)),\n      link: item.getElementsByTagName(\'link\')[0].textContent as string,\n      categories: Array.from(item.getElementsByTagName(\'category\'))\n        .map(category => ({key: (category.textContent as string).replace("-", " ")}))\n    } as IBlogPost)))\n    .then(posts => posts.filter(post => post.categories.length !== 0))\n    .then(posts => posts.slice(0, 5))\n}',
  'internal class IceCreamService\n    {\n        public bool IsThereAnyLeft()\n        {\n            return false;\n        }\n\n        public void ScheduleIceCreamOrder()\n        {\n            Console.WriteLine("Ordering new ice cream...");\n            Thread.Sleep(TimeSpan.FromSeconds(.25));\n            Console.WriteLine("New ice cream ordered!");\n        }\n\n        public CustomerOrder QueryNextCustomer()\n        {\n            return new CustomerOrder(IceCreamTopping.ChocolateFlakes, "Hazelnut");\n        }\n\n        public void AddTopping(IceCreamTopping topping)\n        {\n            Console.WriteLine($"Topping {topping} added!");\n        }\n    }\n'
]
