import Search from '@/components/Search.vue'
import { mount } from '@vue/test-utils'
describe('Search', ()=>{
   
     test('If request is send if querys length correct', async()=>{
        const wrapper = mount(Search, {
            props: {
                maxLength:6,
                placeholder:"test"
            }
        })
        const input = wrapper.find('[data-testid="query-input"]')
        expect(input.isVisible()).toBe(true)
        input.setValue('12345')
        wrapper.find('[data-testid="form"]').trigger('submit')
        const emmits = wrapper.emitted('search')
        expect(emmits).toHaveLength(1)  
     })

     test('If request is send with correct data if querys length incorrect', ()=>{
        const wrapper = mount(Search, {
            props: {
                maxLength:6,
                placeholder:"test"
            }
        })
        const input = wrapper.find('[data-testid="query-input"]')
        expect(input.isVisible()).toBe(true)
        input.setValue('1234567')
        wrapper.find('[data-testid="form"]').trigger('submit')
        expect(wrapper.emitted('search')).toHaveLength(1)  
        const payload = {query : "123456" }
        expect(wrapper.emitted('search')[0][0]).toMatchObject(payload)
     })
})