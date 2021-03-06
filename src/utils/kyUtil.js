import store from '../store'

const sentences404 = [
  '漫漫人生路，一直在迷路。',
  '若来世有归途，但愿爱不迷路。',
  '别再自己摸索，问路才不会迷路。',
  '旅行是为了迷路，迷路是为了遇上美好。',
  '牵着我的手，闭着眼睛走你也不会迷路。',
  '迷路不是因为没有方向，而是方向太多。',
  '如果你不在乎身处何地，你就不会迷路。',
  '在这个世界上，人只需要闭上眼睛，转个向，就会迷路。',
  '前方总是会出现一个又一个的十字路口，我已经习惯了迷路。',
  '常常告诫自己不要在一棵树上吊死，结果在树林里迷路了。',
  '地球之所以是圆的，是因为上帝想让那些走失或者迷路的人能够重新相遇。',
  '有时候疯疯癫癫，有时候放空一切，只因这一秒，我在自己的世界里迷路了。']
const sentencesLogin = [
  { content: '本来无望的事，大胆尝试，往往能成功。', name: '莎士比亚' },
  { content: '最不会利用时间的人，最会抱怨时间不够。', name: '拉布吕耶尔' },
  { content: '对于不屈不挠的人来说，没有失败这回事。', name: '俾斯麦' },
  { content: '骐骥一跃，不能十步；驽马十驾，功以不舍。', name: '荀况' },
  { content: '锲而舍之，朽木不折；锲而不舍，金石可镂。', name: '荀况' },
  { content: '失败也是我需要的，它和成功对我一样有价值。', name: '爱迪生' },
  { content: '天才是百分之一的灵感加上百分之九十九的汗水。', name: '爱迪生' },
  { content: '执着追求并从中得到最大快乐的人，才是成功者。', name: '梭罗' },
  { content: '只要朝着一个方向努力，一切都会变得得心应手。', name: '勃朗宁' },
  { content: '不登高山，不知天之大；不临深谷，不知地之厚也。', name: '荀况' },
  { content: '伟大的人物都走过了荒沙大漠，才登上光荣的高峰。', name: '巴尔扎克' },
  { content: '胜利者往往是从坚持最后五分钟的时间中得来成功。', name: '牛顿' },
  { content: '盛年不重来，一日难再晨。及时当勉励，岁月不待人。', name: '陶渊明' },
  { content: '真正的人生，只有在经过艰难卓绝的斗争之后才能实现。', name: '塞涅卡' },
  { content: '只要持续地努力，不懈地奋斗，就没有征服不了的东西。', name: '塞内加' },
  { content: '古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。', name: '苏轼' },
  { content: '哪里有天才，我是把别人喝咖啡的功夫，都用在工作上的。', name: '鲁迅' },
  { content: '只有把抱怨环境的心情，化为上进的力量，才是成功的保证。', name: '罗曼·罗兰' },
  { content: '让自己的内心藏着一条巨龙，既是一种苦刑，也是一种乐趣。', name: '雨果' },
  { content: '不安于小成，然后足以成大器；不诱于小利，然后可以立远功。', name: '方孝孺' },
  { content: '每一个人要有做一代豪杰的雄心斗志！应当做个开创一代的人。', name: '周恩来' },
  { content: '你热爱生命吗？那么别浪费时间，因为时间是构成生命的材料。', name: '富兰克林' },
  { content: '没有人事先了解自己到底有多大的力量，直到他试过以后才知道。', name: '歌德' },
  { content: '那脑袋里的智慧，就像打火石里的火花一样，不去打它是不肯出来的。', name: '莎士比亚' },
  { content: '君子不镜于水，而镜于人。镜于水，见面之容，镜于人，则知吉与凶。', name: '墨子' },
  { content: '灵感并不是在逻辑思考的延长线上产生，而是在破除逻辑或常识的地方才有灵感。', name: '爱因斯坦' },
  { content: '一个人如果不到最高峰，他就没有片刻的安宁，他也就不会感到生命的恬静和光荣。', name: '肖伯纳' },
  { content: '成功者与失败者之间的区别，常在于成功者能由错误中获益，并以不同的方式再尝试。', name: '爱默生' },
  { content: '人生是一场无休、无歇的战斗，凡是要做个够得上称为人的人，都得时时向无形的敌人作战。', name: '罗曼·罗兰' }
]

// 保存被选中的 GroupId
export function saveGroupId(id) {
  store.commit('saveGroupId', id)
}

// 从 Store 中读取 GroupId
export function getGroupId() {
  return store.state.selectedGroup.selectedGroupId
}

// 从数组中选取一句优雅的句子
export function chooseElegantSentences404() {
  return sentences404[Math.floor(Math.random() * sentences404.length)]
}

// 从数组中选取一句优雅的句子
export function chooseElegantSentencesLogin() {
  return sentencesLogin[Math.floor(Math.random() * sentencesLogin.length)]
}
