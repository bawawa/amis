import React from 'react';
import {registerActionPanel} from '../../actionsPanelManager';
import {renderCmptSelect, renderCmptIdInput} from './helper';
import {buildLinkActionDesc} from '../../helper';

registerActionPanel('validate', {
  label: '校验表单',
  tag: '组件',
  description: '校验表单数据',
  descDetail: (info: any, context: any, props: any) => {
    return (
      <div className="action-desc">
        校验
        {buildLinkActionDesc(props.manager, info)}
        的数据
      </div>
    );
  },
  supportComponents: 'form',
  schema: () => [
    ...renderCmptSelect('目标组件', true),
    renderCmptIdInput(),
    {
      name: 'outputVar',
      type: 'input-text',
      label: '校验结果',
      placeholder: '请输入存储校验结果的变量名称',
      description:
        '如需执行多次表单校验，可以修改此变量名用于区分不同的校验结果',
      mode: 'horizontal',
      size: 'lg',
      value: 'validateResult',
      required: true
    }
  ],
  outputVarDataSchema: [
    {
      type: 'object',
      title: 'validateResult',
      properties: {
        error: {
          type: 'string',
          title: '错误信息'
        },
        errors: {
          type: 'object',
          title: '错误详情'
        },
        payload: {
          type: 'object',
          title: '提交的表单数据'
        }
      }
    }
  ]
});
