import React from 'react';
import { Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {Camera, useCameraDevice} from 'react-native-vision-camera';

function Cam({navigation}): React.JSX.Element {
  Camera.requestCameraPermission();
  let device = useCameraDevice('front');
  let isActive = true;
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'column', marginTop: 0, height: "100%"}}>
        <View style={{flexDirection: 'row', alignItems: 'stretch'}}>
          <View
            style={{
              flex: 3,
            }}>
            <Camera
              style={[StyleSheet.absoluteFill, {height: "100%"}]}
              device={device}
              isActive={isActive}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10, marginRight: 5}}>
            <ScrollView style={{height: "88%", marginBottom: 5}} >
              <Text style={{fontSize: 15}}>
                本合同有效期三年。合同期满前十五天，甲乙双方任何一方未提出书面解约要求的，合同有效期自动
                顺延三年，可多次顺延。
                第六条 甲方向乙方核发《保险销售从业人员执业证书》之后，乙方方可开始从事保险代理行为。
                甲方授权乙方在 行政区域内代理销售甲方保险产品，从事如下代理行为：
                1. 持有和使用经甲方制作或核准的展业资料，全面、忠实地向客户解释、说明甲方保险产品的内容和
                保险条款；
                2. 认真、正确指导客户填写投保书，并将自己知道的或应当知道的可能会影响甲方承保及承保费率的
                有关客户的情况，如实填写《代理人报告书》，告知甲方；
                3.应按照准确、完整、安全、保密的原则，收集、记录客户信息，并将客户信息真实、完整地提交给
                公司；
                4. 经甲方授权，在甲方营业场所外代表甲方向与甲方订立保险合同的客户，或向拟与甲方订立保险合同
                的客户收取单次保险合同金额不超过人民币1000元现金保险费，并按甲方规定向客户交付保险费预收收
                据；对于保险合同单次金额超过1000元的，应采取非现金收费方式，将保费缴至甲方保费专用帐户。
                5. 在本合同规定的时间内将代收保险费全部及时缴交给甲方；
                6. 及时将投保单等相关投保文件及客户准确资料交甲方审核；
                7. 在甲方同意承保后，乙方应在收到甲方签发的保险单正本后三天内将保险单送达客户；
                8. 按照甲方管理规定，向客户提供与该保险合同有关的售后服务；
                9. 其他经甲方授权的行为。
                第七条 代理合同期间，乙方须遵守国家法律法规，遵守社会公德、遵循诚实信用原则，严格在甲方授权范围
                内开展业务。
                乙方发生下述行为的，视为违反本合同义务，甲方有权依照本合同第二十条的规定追究乙方责任：
                1. 误导客户：向客户提供虚假资料或误导性的宣传说明，或曲意解释保险条款、投保规则、保全规则，
                或擅自修改、变更投保书和保单资料、擅自提高、减低保险费率，私自篡改或曲意解释产品说明书内容，
                夸大或承诺投资收益及分红红利，或夸大资金投资渠道、保险保障利益，向客户隐瞒投资风险事实、
                投资帐户保费分配方式、甲方向客户收取的投资帐户的各项费用及收取比例，以不正当手段影响客户投保选择；
                2. 代签名：在投保书、金领建议书、客户权益确认书、契约审核函件、体检报告书中的健康告知、各
                类疾病问卷、授权委托书、委托转帐合同、保单回执及各类变更申请书等甲方规定需客户（投保人、
                被保险人、受益人或监护人）本人亲笔签名的相关保险资料，非客户本人亲笔签名、代客户签名或唆
                使他人代客户签名；
                3. 冒名顶替体检：协同客户让他人顶替体检、伪造或修改体检报告，或明知客户顶替体检不阻止且不
                告知甲方，或在客户不知情的情况下擅自找他人顶替体检；
                4. 强制或引诱客户投保、唆使客户退保、回佣、隐瞒犹豫期或阻挠客户犹豫期退保；
                5. 以甲方名义修改或变更保险条款，签订、变更、废除任何保险合约，放弃甲方任何权利；
              </Text>
            </ScrollView>
            <View>
              <Button title={'阅读条款'} onPress={() => {isActive = false;navigation.navigate('PdfPage');}} ></Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default Cam;
