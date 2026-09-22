// PLAY TOGETHER - EVENT CONFIGURATION
// Đồng bộ chính xác theo cấu trúc CF-game và tài nguyên Play Together

export interface Reward {
  id: string
  name: string
  image: string
  chancePercent: number
}

export const eventConfig = {
  brand: {
    name: 'Play Together VNG',
    shortName: 'Play Together',
    scratchLogo: '',
    year: '2026',
    background: '/event-assets/background.jpg',
  },
  theme: {
    primary: '#e82641',
    primaryDark: '#991124',
    seal: '#eb0a1e',
    scratchHighlight: '#ffc2d1',
    scratchFoilDark: '#c9184a',
    scratchFoilLight: '#ff758f',
    ink: '#1e293b',
    background: '#ffffff',
    muted: '#71717a',
    border: '#ffb3c1',
  },
  copy: {
    artworkRatio: '3 : 4',
    boothName: 'CÔNG VIÊN THÚ CƯNG ANH ĐÀO',
    stampBooth: 'BOOTH 01',
    boothKicker: 'Vùng đóng dấu thẻ',
    stampEventLine: 'PLAY TOGETHER · 2026',
    stampValidated: 'VALIDATED',
    openReward: 'Hãy Mở Phần Quà Của Bạn',
    yourReward: 'Chúc mừng bạn nhận được',
    received: 'BẠN ĐÃ NHẬN ĐƯỢC',
    backHome: 'Về trang chủ',
    scratchAriaLabel: 'Cào thẻ nhận quà, hoặc nhấn Enter để mở',
    qrInstruction: 'Quét mã QR bằng điện thoại của bạn để tiếp tục trải nghiệm và chơi trên thiết bị di động.',
    welcome: 'CHÀO MỪNG BẠN',
    loginTitle: 'Hành trình',
    loginTitleAccent: 'bắt đầu.',
    loginDescription: 'Nhập thông tin để mở hộ chiếu sự kiện của bạn.',
    nameLabel: 'Họ và tên :',
    phoneLabel: 'Số Điện Thoại :',
    idGameLabel: 'ID Game :',
    optionYes: 'Có',
    optionNo: 'Không Có',
    btnContinue: 'TIẾP TỤC',
  },
  timing: {
    stampTransitionMs: 1650,
    scratchRevealMs: 1100,
  },
  scratch: {
    completionPercent: 30,
    brushSize: 62,
  },
  stamp: {
    image: '/event-assets/dongdau.jpg',
  },
  rewards: [
    {
      id: 'mockhoa-bong',
      name: '01 Móc Khóa Bông',
      image: '/event-assets/mockhoa.jpg',
      chancePercent: 100,
    },
  ] satisfies Reward[],
}

export function pickWeightedReward(rewards: readonly Reward[] = eventConfig.rewards): Reward {
  const availableRewards = rewards.filter(reward => reward.chancePercent > 0)
  const totalChance = availableRewards.reduce((sum, reward) => sum + reward.chancePercent, 0)

  if (availableRewards.length === 0 || totalChance <= 0) {
    throw new Error('Cần ít nhất một phần quà có chancePercent lớn hơn 0.')
  }

  let ticket = Math.random() * totalChance
  for (const reward of availableRewards) {
    ticket -= reward.chancePercent
    if (ticket < 0) return reward
  }

  return availableRewards[availableRewards.length - 1]
}
