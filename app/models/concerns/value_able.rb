module ValueAble
  def valueable(*attrs)
    attrs.each do |a|
      a = a.to_sym

      define_getter(a)
      define_setter(a)
    end
  end

  protected

  def define_getter(a)
    define_method(a) do
      self[a].to_f / 100
    end
  end

  def define_setter(a)
    name = (a.to_s + '=').to_sym

    define_method(name) do |new_value|
      if new_value.is_a? String
        new_value.gsub!(',', '.')
      end

      new_value = (new_value.to_f * 100).round

      self[a] = new_value
    end
  end
end
