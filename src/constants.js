const CONTRACT_ADDRESS = '0x4cC36aCAD2bB916698E290E8AEf6C13bB72cfa61';

const transformBossData = (characterData) => {
  return {
    name: characterData.name,
    imageUri: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    magicDamage: characterData.magicDamage.toNumber(),
    armor: characterData.armor.toNumber(),
    magicResist: characterData.magicResist.toNumber(),
  };
};

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageUri: characterData.imageUri,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
    magicDamage: characterData.magicDamage.toNumber(),
    armor: characterData.armor.toNumber(),
    magicResist: characterData.magicResist.toNumber(),
    team: characterData?.team?.toString(),
  };
};


export { CONTRACT_ADDRESS, transformBossData, transformCharacterData };